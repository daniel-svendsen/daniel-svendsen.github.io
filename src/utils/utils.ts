import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SITE_CONFIG = {
  defaultOgImage: '/LOGO.png',
}

export const toAbsoluteUrl = (path: string | undefined): string | undefined => {
  if (!path) {
    return undefined
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const siteUrl = import.meta.env.VITE_SITE_URL

  if (!siteUrl) {
    return path.startsWith('/') ? path : `/${path}`
  }

  const normalizedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.slice(0, -1)
    : siteUrl
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizedSiteUrl}${normalizedPath}`
}