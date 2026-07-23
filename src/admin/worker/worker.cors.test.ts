import { beforeAll, describe, expect, it, vi } from 'vitest'

let worker: typeof import('./worker').default

beforeAll(async () => {
  vi.stubGlobal('caches', { default: {} })
  worker = (await import('./worker')).default
})

async function preflight(origin: string) {
  return worker.fetch(
    new Request('https://api.svendsenphotography.com/api/check-auth', {
      method: 'OPTIONS',
      headers: { Origin: origin },
    }),
    {} as never,
    {} as never,
  )
}

describe('Worker CORS origin contract', () => {
  it.each([
    'https://www.svendsenphotography.com',
    'http://localhost:5173',
  ])('allows the established origin %s', async (origin) => {
    const response = await preflight(origin)

    expect(response.headers.get('Access-Control-Allow-Origin')).toBe(origin)
    expect(response.headers.get('Access-Control-Allow-Credentials')).toBe(
      'true',
    )
    expect(response.headers.get('Access-Control-Allow-Methods')).toBe(
      'GET, POST, PUT, DELETE, OPTIONS',
    )
  })

  it('does not echo an origin outside the allowlist', async () => {
    const response = await preflight('https://example.com')

    expect(response.headers.get('Access-Control-Allow-Origin')).toBeNull()
    expect(response.headers.get('Access-Control-Allow-Credentials')).toBe(
      'true',
    )
  })
})
