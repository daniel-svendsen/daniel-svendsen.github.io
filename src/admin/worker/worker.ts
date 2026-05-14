// src/admin/worker/worker.ts

const Router = () => {
  const routes: { method: string; path: RegExp; handler: Function }[] = []
  const add = (method: string, path: RegExp, handler: Function) => {
    routes.push({ method, path, handler })
  }
  const handle = async (request: Request, ...args: any[]) => {
    const url = new URL(request.url)
    for (const route of routes) {
      if (request.method !== route.method) continue
      const match = url.pathname.match(route.path)
      if (match) {
        const params = match.groups || {}
        const response: Response = await route.handler(request, params, ...args)
        return response
      }
    }
    return null
  }
  return {
    get: (path: RegExp, handler: Function) => add('GET', path, handler),
    post: (path: RegExp, handler: Function) => add('POST', path, handler),
    put: (path: RegExp, handler: Function) => add('PUT', path, handler),
    delete: (path: RegExp, handler: Function) => add('DELETE', path, handler),
    handle,
  }
}

const authMiddleware = async (request: Request, env: Env) => {
  const cookieHeader = request.headers.get('Cookie') || ''
  const sessionIdMatch = cookieHeader.match(/sessionId=([a-zA-Z0-9-]+)/)
  if (!sessionIdMatch) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized: Missing session.' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
  const sessionId = sessionIdMatch[1]
  const session = await env.SESSIONS_V2.get(`session:${sessionId}`)
  if (!session) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized: Invalid session.' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
  return null
}

const FOLDER_PLACEHOLDER = '.folder-placeholder'
const IMAGE_CACHE_SECONDS = 60 * 60 * 24 * 30
const R2_DELETE_BATCH_SIZE = 1000
const apiRouter = Router()
const imageCache = (caches as CacheStorage & { default: Cache }).default

const jsonResponse = (
  body: unknown,
  init: ResponseInit = {},
  cacheControl?: string,
) => {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json')
  if (cacheControl) {
    headers.set('Cache-Control', cacheControl)
  }
  return new Response(JSON.stringify(body), { ...init, headers })
}

const listAllObjects = async (
  bucket: R2Bucket,
  options: R2ListOptions,
): Promise<R2Object[]> => {
  const objects: R2Object[] = []
  let cursor: string | undefined

  do {
    const page = await bucket.list({ ...options, cursor })
    objects.push(...page.objects)
    cursor = page.truncated ? page.cursor : undefined
  } while (cursor)

  return objects
}

const listAllObjectsAndPrefixes = async (
  bucket: R2Bucket,
  options: R2ListOptions,
): Promise<{ objects: R2Object[]; delimitedPrefixes: string[] }> => {
  const objects: R2Object[] = []
  const delimitedPrefixes = new Set<string>()
  let cursor: string | undefined

  do {
    const page = await bucket.list({ ...options, cursor })
    objects.push(...page.objects)
    page.delimitedPrefixes.forEach((prefix) => delimitedPrefixes.add(prefix))
    cursor = page.truncated ? page.cursor : undefined
  } while (cursor)

  return { objects, delimitedPrefixes: [...delimitedPrefixes] }
}

const deleteKeys = async (bucket: R2Bucket, keys: string[]) => {
  for (let i = 0; i < keys.length; i += R2_DELETE_BATCH_SIZE) {
    await bucket.delete(keys.slice(i, i + R2_DELETE_BATCH_SIZE))
  }
}

const cachedImageRequest = (request: Request, key: string) => {
  const url = new URL(request.url)
  url.pathname = `/api/image/${key}`
  url.search = ''
  return new Request(url.toString(), { method: 'GET' })
}

const deleteImageCache = async (
  request: Request,
  key: string,
  ctx?: ExecutionContext,
) => {
  const cacheRequest = cachedImageRequest(request, key)
  const deletePromise = imageCache.delete(cacheRequest)
  if (ctx) {
    ctx.waitUntil(deletePromise)
  } else {
    await deletePromise
  }
}

const deleteImageCaches = (
  request: Request,
  keys: string[],
  ctx: ExecutionContext,
) => {
  const deletePromise = Promise.all(
    keys.map((key) => imageCache.delete(cachedImageRequest(request, key))),
  )
  ctx.waitUntil(deletePromise)
}

apiRouter.post(
  /^\/api\/login$/,
  async (request: Request, params: any, env: Env) => {
    try {
      const { password } = (await request.json()) as { password?: string }
      if (password === env.ADMIN_PASSWORD) {
        const sessionId = crypto.randomUUID()
        await env.SESSIONS_V2.put(`session:${sessionId}`, 'valid', {
          expirationTtl: 86400,
        })
        const cookie = `sessionId=${sessionId}; HttpOnly; Secure; Path=/; SameSite=None; Max-Age=86400`
        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' },
        })
      }
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Server error during login.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.get(
  /^\/api\/check-auth$/,
  async (request: Request, params: any, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  },
)

apiRouter.post(/^\/api\/logout$/, async () => {
  const cookie = `sessionId=; HttpOnly; Secure; Path=/; SameSite=None; Max-Age=0`
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' },
  })
})

apiRouter.get(
  /^\/api\/galleries$/,
  async (request: Request, params: any, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const listResult = await listAllObjectsAndPrefixes(env.PICTURES, {
        delimiter: '/',
      })
      const galleries = listResult.delimitedPrefixes
      return jsonResponse(galleries, {}, 'private, max-age=30')
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to list galleries.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.put(
  /^\/api\/upload\/(?<key>.+)$/,
  async (
    request: Request,
    params: { key: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const contentType = request.headers.get('Content-Type') || undefined
      await env.PICTURES.put(params.key, request.body, {
        httpMetadata: contentType ? { contentType } : undefined,
      })
      await deleteImageCache(request, params.key, ctx)
      return new Response(
        JSON.stringify({ success: `Uploaded ${params.key}!` }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Upload to R2 bucket failed.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.delete(
  /^\/api\/gallery\/(?<galleryName>[^/]+)\/images$/,
  async (
    request: Request,
    params: { galleryName: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const prefix = `${params.galleryName}/`
      const objects = await listAllObjects(env.PICTURES, { prefix })
      if (objects.length > 0) {
        const keysToDelete = objects.map((obj) => obj.key)
        await deleteKeys(env.PICTURES, keysToDelete)
        deleteImageCaches(request, keysToDelete, ctx)
      }
      await env.LIKES_V2.delete(params.galleryName)
      return new Response(
        JSON.stringify({ success: `Emptied gallery ${params.galleryName}.` }),
        { status: 200 },
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to clear gallery images.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.post(
  /^\/api\/create-folder$/,
  async (request: Request, params: any, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const { path } = (await request.json()) as { path: string }
      if (!path || !path.endsWith('/')) {
        return new Response(JSON.stringify({ error: 'Invalid folder path.' }), {
          status: 400,
        })
      }
      await env.PICTURES.put(path + FOLDER_PLACEHOLDER, null)
      return new Response(JSON.stringify({ success: true }), { status: 201 })
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Could not create folder.' }),
        {
          status: 500,
        },
      )
    }
  },
)

apiRouter.delete(
  /^\/api\/folder\/(?<prefix>.+)$/,
  async (
    request: Request,
    params: { prefix: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const prefix = params.prefix
      if (!prefix) {
        return new Response(JSON.stringify({ error: 'Missing prefix' }), {
          status: 400,
        })
      }
      const objects = await listAllObjects(env.PICTURES, { prefix })
      if (objects.length > 0) {
        const keysToDelete = objects.map((obj) => obj.key)
        await deleteKeys(env.PICTURES, keysToDelete)
        deleteImageCaches(request, keysToDelete, ctx)
      }
      return new Response(null, { status: 204 })
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to clear folder.' }),
        {
          status: 500,
        },
      )
    }
  },
)

apiRouter.delete(
  /^\/api\/gallery\/(?<galleryName>.+)$/,
  async (
    request: Request,
    params: { galleryName: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const galleryId = params.galleryName.replace(/\/$/, '')
      const prefix = `${galleryId}/`

      const objects = await listAllObjects(env.PICTURES, { prefix })
      if (objects.length > 0) {
        const keysToDelete = objects.map((obj) => obj.key)
        await deleteKeys(env.PICTURES, keysToDelete)
        deleteImageCaches(request, keysToDelete, ctx)
      }
      await env.LIKES_V2.delete(galleryId)

      return new Response(
        JSON.stringify({ success: `Deleted gallery ${galleryId}` }),
        { status: 200 },
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to delete gallery.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.delete(
  /^\/api\/image\/(?<key>.+)$/,
  async (
    request: Request,
    params: { key: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      await env.PICTURES.delete(params.key)
      await deleteImageCache(request, params.key, ctx)
      return new Response(JSON.stringify({ success: `Deleted ${params.key}!` }))
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to delete image.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.post(
  /^\/api\/rename-gallery$/,
  async (request: Request, params: any, env: Env, ctx: ExecutionContext) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const { oldGalleryName, newGalleryName } = (await request.json()) as {
        oldGalleryName: string
        newGalleryName: string
      }
      if (
        !oldGalleryName ||
        !newGalleryName ||
        oldGalleryName === newGalleryName
      ) {
        return new Response(
          JSON.stringify({
            error:
              'Old and new gallery names are required and must be different.',
          }),
          { status: 400 },
        )
      }

      const oldPrefix = `${oldGalleryName}/`
      const newPrefix = `${newGalleryName}/`
      const objects = await listAllObjects(env.PICTURES, { prefix: oldPrefix })
      if (objects.length > 0) {
        for (const obj of objects) {
          const newKey = obj.key.replace(oldPrefix, newPrefix)
          const object = await env.PICTURES.get(obj.key)
          if (object) {
            await env.PICTURES.put(newKey, object.body, {
              httpMetadata: object.httpMetadata,
              customMetadata: object.customMetadata,
            })
            await env.PICTURES.delete(obj.key)
            deleteImageCaches(request, [obj.key, newKey], ctx)
          }
        }
      }

      const likes = await env.LIKES_V2.get(oldGalleryName)
      if (likes) {
        await env.LIKES_V2.put(newGalleryName, likes)
        await env.LIKES_V2.delete(oldGalleryName)
      }

      return new Response(
        JSON.stringify({ success: `Renamed gallery to ${newGalleryName}` }),
        { status: 200 },
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to rename gallery.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.post(
  /^\/api\/like$/,
  async (request: Request, params: any, env: Env) => {
    try {
      const { galleryId, imageKey } = (await request.json()) as {
        galleryId: string
        imageKey: string
      }
      if (!galleryId || !imageKey) {
        return new Response(
          JSON.stringify({ error: 'Missing galleryId or imageKey' }),
          { status: 400 },
        )
      }
      const likedImagesJson = await env.LIKES_V2.get(galleryId)
      const likedImages: string[] = likedImagesJson
        ? JSON.parse(likedImagesJson)
        : []
      const imageIndex = likedImages.indexOf(imageKey)
      if (imageIndex === -1) {
        likedImages.push(imageKey)
      } else {
        likedImages.splice(imageIndex, 1)
      }
      await env.LIKES_V2.put(galleryId, JSON.stringify(likedImages))
      return new Response(JSON.stringify(likedImages), {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to process like.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.get(
  /^\/api\/likes\/(?<galleryId>.+)$/,
  async (request: Request, params: { galleryId: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const likedImagesJson = await env.LIKES_V2.get(params.galleryId)
      const likedImages = likedImagesJson ? JSON.parse(likedImagesJson) : []
      return new Response(JSON.stringify(likedImages), {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Failed to get likes.' }), {
        status: 500,
      })
    }
  },
)

apiRouter.get(
  /^\/api\/image\/(?<key>.+)/,
  async (
    request: Request,
    params: { key: string },
    env: Env,
    ctx: ExecutionContext,
  ) => {
    try {
      const cacheRequest = cachedImageRequest(request, params.key)
      const cachedResponse = await imageCache.match(cacheRequest)
      if (cachedResponse) {
        return new Response(cachedResponse.body, cachedResponse)
      }

      const object = await env.PICTURES.get(params.key)

      if (object === null) {
        return new Response('Object Not Found', { status: 404 })
      }

      const headers = new Headers()
      object.writeHttpMetadata(headers)
      headers.set('etag', object.httpEtag)
      headers.set(
        'Cache-Control',
        `public, max-age=${IMAGE_CACHE_SECONDS}, s-maxage=${IMAGE_CACHE_SECONDS}, immutable`,
      )

      const fileName = params.key.split('/').pop() || 'image'
      headers.set('Content-Disposition', `attachment; filename="${fileName}"`)

      if (!headers.has('Content-Type')) {
        const defaultContentType = 'application/octet-stream'
        headers.set('Content-Type', defaultContentType)
      }

      const response = new Response(object.body, { headers })
      ctx.waitUntil(imageCache.put(cacheRequest, response.clone()))
      return response
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Failed to get image.' }), {
        status: 500,
      })
    }
  },
)

apiRouter.get(
  /^\/api\/gallery-detail\/(?<prefix>.+)$/,
  async (request: Request, params: { prefix: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const prefix = params.prefix
      const galleryId = prefix.split('/')[0]
      const [list, likedImagesJson] = await Promise.all([
        listAllObjectsAndPrefixes(env.PICTURES, { prefix, delimiter: '/' }),
        env.LIKES_V2.get(galleryId),
      ])

      const images = list.objects
        .filter((obj) => !obj.key.endsWith(FOLDER_PLACEHOLDER))
        .map((obj) => obj.key)
      const folders = list.delimitedPrefixes
      const likedImages = likedImagesJson ? JSON.parse(likedImagesJson) : []

      return jsonResponse(
        { images, folders, likedImages },
        {},
        'private, max-age=15, stale-while-revalidate=30',
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to get gallery detail.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.get(
  /^\/api\/gallery-contents\/(?<prefix>.+)$/,
  async (request: Request, params: { prefix: string }, env: Env) => {
    try {
      const prefix = params.prefix
      const list = await listAllObjectsAndPrefixes(env.PICTURES, {
        prefix,
        delimiter: '/',
      })

      const images = list.objects
        .filter((obj) => !obj.key.endsWith(FOLDER_PLACEHOLDER))
        .map((obj) => obj.key)
      const folders = list.delimitedPrefixes

      return jsonResponse(
        { images, folders },
        {},
        'private, max-age=15, stale-while-revalidate=30',
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to get gallery content.' }),
        { status: 500 },
      )
    }
  },
)

apiRouter.get(
  /^\/api\/gallery\/(?<galleryName>[^/]+)\/?.*$/,
  async (request: Request, params: { galleryName: string }, env: Env) => {
    try {
      const prefix = params.galleryName.endsWith('/')
        ? params.galleryName
        : `${params.galleryName}/`

      const objects = await listAllObjects(env.PICTURES, { prefix })

      const imageKeys = objects
        .filter((obj) => !obj.key.endsWith(FOLDER_PLACEHOLDER))
        .map((obj) => obj.key)

      return jsonResponse(
        imageKeys,
        {},
        'public, max-age=60, stale-while-revalidate=300',
      )
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Failed to get gallery content.' }),
        { status: 500 },
      )
    }
  },
)

interface Env {
  PICTURES: R2Bucket
  LIKES_V2: KVNamespace
  SESSIONS_V2: KVNamespace
  ADMIN_PASSWORD?: string
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const allowedOrigins = [
      'https://www.svendsenphotography.com',
      'http://localhost:5173',
    ]
    const origin = request.headers.get('Origin')
    const corsHeaders: Record<string, string> = {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
      'Access-Control-Allow-Credentials': 'true',
    }
    if (origin && allowedOrigins.includes(origin)) {
      corsHeaders['Access-Control-Allow-Origin'] = origin
    }
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }
    const url = new URL(request.url)
    if (url.pathname.startsWith('/api/')) {
      const apiResponse = await apiRouter.handle(request, env, ctx)
      if (apiResponse) {
        Object.keys(corsHeaders).forEach((key) => {
          apiResponse.headers.set(key, corsHeaders[key])
        })
        return apiResponse
      }
      const notFoundResponse = new Response(
        JSON.stringify({ error: 'API Route not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        },
      )
      Object.keys(corsHeaders).forEach((key) => {
        notFoundResponse.headers.set(key, corsHeaders[key])
      })
      return notFoundResponse
    }
    return new Response('Not Found', { status: 404 })
  },
}
