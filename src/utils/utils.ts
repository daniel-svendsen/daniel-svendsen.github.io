import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { SITE_URL } from '@/config/seo'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SITE_CONFIG = {
  defaultOgImage: '/LOGO.png',
  siteUrl: SITE_URL,
}

export const toAbsoluteUrl = (path: string | undefined): string | undefined => {
  if (!path) {
    return undefined
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || SITE_CONFIG.siteUrl

  const normalizedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.slice(0, -1)
    : siteUrl
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizedSiteUrl}${normalizedPath}`
}
