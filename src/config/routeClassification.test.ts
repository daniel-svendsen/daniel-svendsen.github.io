import { describe, expect, it } from 'vitest'

import {
  INDEXABLE_PUBLIC_ROUTES,
  PUBLIC_ROUTE_KEYS,
  PUBLIC_ROUTE_PATHS,
  PUBLIC_ROUTER_PATHS,
} from './publicRoutes'
import {
  APP_ROUTE_PATHS,
  APP_SHELL_REWRITES,
  classifyRoutePath,
  isIndexablePublicRoute,
  normalizeRoutePathname,
  shouldNoIndexRoute,
} from './routeClassification'

describe('route classification', () => {
  it('keeps every public route indexable with or without its trailing slash', () => {
    for (const route of PUBLIC_ROUTER_PATHS) {
      const trailingSlashRoute = route === '/' ? route : `${route}/`

      expect(classifyRoutePath(route)).toBe('indexable-public')
      expect(classifyRoutePath(trailingSlashRoute)).toBe('indexable-public')
      expect(shouldNoIndexRoute(route)).toBe(false)
    }
  })

  it.each([
    APP_ROUTE_PATHS.work,
    `${APP_ROUTE_PATHS.work}/`,
    APP_ROUTE_PATHS.admin,
    APP_ROUTE_PATHS.adminLogin,
    '/admin/gallery/example',
    '/galleri/example',
    APP_ROUTE_PATHS.appShell,
    '/unknown-route',
  ])('keeps %s outside the indexable route set', (route) => {
    expect(isIndexablePublicRoute(route)).toBe(false)
    expect(shouldNoIndexRoute(route)).toBe(true)
  })

  it('normalizes trailing slashes without changing route identity', () => {
    expect(normalizeRoutePathname('/services/')).toBe('/services')
    expect(normalizeRoutePathname('services///')).toBe('/services')
    expect(normalizeRoutePathname('/')).toBe('/')
  })

  it('derives route keys and prerender paths from the same public source', () => {
    expect(PUBLIC_ROUTE_KEYS).toEqual(Object.keys(PUBLIC_ROUTE_PATHS))
    expect(INDEXABLE_PUBLIC_ROUTES).toEqual(
      PUBLIC_ROUTER_PATHS.map((route) =>
        route === '/' ? route : `${route}/`,
      ),
    )
  })

  it('preserves the established app-shell rewrite contract', () => {
    expect(APP_SHELL_REWRITES).toEqual([
      '/galleri/* /app-shell/ 200',
      '/admin /app-shell/ 200',
      '/admin/* /app-shell/ 200',
      '/work /app-shell/ 200',
      '/work/ /app-shell/ 200',
    ])
  })
})
