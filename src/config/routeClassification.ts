import { PUBLIC_ROUTER_PATHS } from './publicRoutes'

export const APP_ROUTE_PATHS = {
  work: '/work',
  gallery: '/galleri/:galleryId',
  appShell: '/app-shell',
  adminLogin: '/admin/login',
  admin: '/admin',
  adminGallery: 'gallery/:galleryId',
} as const

export const NOINDEX_ROUTE_PATHS = [
  APP_ROUTE_PATHS.work,
  APP_ROUTE_PATHS.appShell,
] as const

export const NOINDEX_ROUTE_PREFIXES = ['/admin', '/galleri'] as const

export const APP_SHELL_REWRITES = [
  '/galleri/* /app-shell/ 200',
  '/admin /app-shell/ 200',
  '/admin/* /app-shell/ 200',
  '/work /app-shell/ 200',
  '/work/ /app-shell/ 200',
] as const

export type RouteIndexingClassification = 'indexable-public' | 'noindex'

const indexablePublicRoutes = new Set<string>(PUBLIC_ROUTER_PATHS)
const exactNoIndexRoutes = new Set<string>(NOINDEX_ROUTE_PATHS)

export function normalizeRoutePathname(pathname: string): string {
  if (pathname === '/') {
    return pathname
  }

  const normalizedPathname = pathname.startsWith('/')
    ? pathname
    : `/${pathname}`

  return normalizedPathname.replace(/\/+$/, '') || '/'
}

export function classifyRoutePath(
  pathname: string,
): RouteIndexingClassification {
  const normalizedPathname = normalizeRoutePathname(pathname)

  if (indexablePublicRoutes.has(normalizedPathname)) {
    return 'indexable-public'
  }

  if (
    exactNoIndexRoutes.has(normalizedPathname) ||
    NOINDEX_ROUTE_PREFIXES.some(
      (prefix) =>
        normalizedPathname === prefix ||
        normalizedPathname.startsWith(`${prefix}/`),
    )
  ) {
    return 'noindex'
  }

  return 'noindex'
}

export function isIndexablePublicRoute(pathname: string): boolean {
  return classifyRoutePath(pathname) === 'indexable-public'
}

export function shouldNoIndexRoute(pathname: string): boolean {
  return classifyRoutePath(pathname) === 'noindex'
}
