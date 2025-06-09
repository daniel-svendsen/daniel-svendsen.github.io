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

const apiRouter = Router()

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
      const galleryListJson = await env.GALLERIES_KV.get('GALLERY_LIST')
      const galleries = galleryListJson ? JSON.parse(galleryListJson) : []
      return new Response(JSON.stringify(galleries), {
        headers: { 'Content-Type': 'application/json' },
      })
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
  async (request: Request, params: { key: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const galleryName = params.key.split('/')[0]
      if (galleryName) {
        const galleryListJson = await env.GALLERIES_KV.get('GALLERY_LIST')
        let galleries = galleryListJson ? JSON.parse(galleryListJson) : []
        if (!galleries.includes(galleryName + '/')) {
          galleries.push(galleryName + '/')
          await env.GALLERIES_KV.put('GALLERY_LIST', JSON.stringify(galleries))
        }
      }
      await env.PICTURES.put(params.key, request.body)
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
  async (request: Request, params: { galleryName: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const prefix = `${params.galleryName}/`
      const list = await env.PICTURES.list({ prefix })
      if (list.objects && list.objects.length > 0) {
        const keysToDelete = list.objects.map((obj) => obj.key)
        await env.PICTURES.delete(keysToDelete)
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

apiRouter.delete(
  /^\/api\/gallery\/(?<galleryName>.+)$/,
  async (request: Request, params: { galleryName: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      const galleryId = params.galleryName.replace(/\/$/, '')
      const prefix = `${galleryId}/`

      const list = await env.PICTURES.list({ prefix })
      if (list.objects && list.objects.length > 0) {
        const keysToDelete = list.objects.map((obj) => obj.key)
        await env.PICTURES.delete(keysToDelete)
      }
      await env.LIKES_V2.delete(galleryId)

      const galleryListJson = await env.GALLERIES_KV.get('GALLERY_LIST')
      let galleries = galleryListJson ? JSON.parse(galleryListJson) : []
      galleries = galleries.filter((g: string) => g !== prefix)
      await env.GALLERIES_KV.put('GALLERY_LIST', JSON.stringify(galleries))

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
  async (request: Request, params: { key: string }, env: Env) => {
    const authError = await authMiddleware(request, env)
    if (authError) return authError
    try {
      await env.PICTURES.delete(params.key)
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
  async (request: Request, params: any, env: Env) => {
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
      const list = await env.PICTURES.list({ prefix: oldPrefix })
      if (list.objects && list.objects.length > 0) {
        for (const obj of list.objects) {
          const newKey = obj.key.replace(oldPrefix, newPrefix)
          const object = await env.PICTURES.get(obj.key)
          if (object) {
            await env.PICTURES.put(newKey, object.body, {
              httpMetadata: object.httpMetadata,
              customMetadata: object.customMetadata,
            })
            await env.PICTURES.delete(obj.key)
          }
        }
      }

      const likes = await env.LIKES_V2.get(oldGalleryName)
      if (likes) {
        await env.LIKES_V2.put(newGalleryName, likes)
        await env.LIKES_V2.delete(oldGalleryName)
      }

      const galleryListJson = await env.GALLERIES_KV.get('GALLERY_LIST')
      let galleries = galleryListJson ? JSON.parse(galleryListJson) : []
      galleries = galleries.map((g: string) =>
        g === oldPrefix ? newPrefix : g,
      )
      await env.GALLERIES_KV.put('GALLERY_LIST', JSON.stringify(galleries))

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
  async (request: Request, params: { key: string }, env: Env) => {
    try {
      const object = await env.PICTURES.get(params.key)
      if (object === null)
        return new Response('Object Not Found', { status: 404 })
      const headers = new Headers()
      object.writeHttpMetadata(headers)
      headers.set('etag', object.httpEtag)
      return new Response(object.body, { headers })
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Failed to get image.' }), {
        status: 500,
      })
    }
  },
)

apiRouter.get(
  /^\/api\/gallery\/(?<galleryName>[^/]+\/?.*)$/,
  async (request: Request, params: { galleryName: string }, env: Env) => {
    try {
      const galleryName = params.galleryName.endsWith('/')
        ? params.galleryName
        : `${params.galleryName}/`
      const list = await env.PICTURES.list({ prefix: galleryName })
      if (!list.objects) return new Response(JSON.stringify([]))
      const imageKeys = list.objects.map((obj) => obj.key)
      return new Response(JSON.stringify(imageKeys), {
        headers: { 'Content-Type': 'application/json' },
      })
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
  GALLERIES_KV: KVNamespace
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
