export const SITE_URL = 'https://www.svendsenphotography.com'

export function toSiteUrl(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`

  return `${SITE_URL}${normalizedPath}`
}
