const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const apiUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${API_BASE_URL}/api/${cleanPath}`
}

export const imageUrl = (path: string): string => {
  const cleanPath = path.startsWith('api/') ? path.slice(4) : path
  return `${API_BASE_URL}/api/image${
    cleanPath.startsWith('/') ? '' : '/'
  }${cleanPath}`
}
