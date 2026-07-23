import { describe, expect, it } from 'vitest'

import {
  INDEXABLE_PUBLIC_ROUTES,
  PUBLIC_CANONICAL_URLS,
  PUBLIC_ROUTE_PATHS,
} from './publicRoutes'
import { SITE_URL, toSiteUrl } from './siteOrigin.js'

describe('public canonical URLs', () => {
  it('derives every canonical from the production origin and route path', () => {
    expect(Object.keys(PUBLIC_CANONICAL_URLS)).toEqual(
      Object.keys(PUBLIC_ROUTE_PATHS),
    )
    expect(Object.values(PUBLIC_CANONICAL_URLS)).toEqual(
      INDEXABLE_PUBLIC_ROUTES.map((route) => `${SITE_URL}${route}`),
    )
  })

  it('preserves the established trailing-slash contract', () => {
    expect(PUBLIC_CANONICAL_URLS.home).toBe(
      'https://www.svendsenphotography.com/',
    )
    expect(PUBLIC_CANONICAL_URLS.services).toBe(
      'https://www.svendsenphotography.com/services/',
    )
    expect(
      Object.values(PUBLIC_CANONICAL_URLS).every(
        (url) => url.endsWith('/') && !url.slice(SITE_URL.length).includes('//'),
      ),
    ).toBe(true)
  })

  it('normalizes relative site paths without changing trailing slashes', () => {
    expect(toSiteUrl('services/')).toBe(
      'https://www.svendsenphotography.com/services/',
    )
    expect(toSiteUrl('/services')).toBe(
      'https://www.svendsenphotography.com/services',
    )
  })
})
