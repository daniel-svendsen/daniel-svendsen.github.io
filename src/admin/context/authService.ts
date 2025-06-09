import { apiUrl } from '@/admin/utils/apiUrl'

export const checkAuthStatus = async () => {
  const response = await fetch(apiUrl('check-auth'), {
    credentials: 'include',
  })
  return response
}

export const loginUser = async (password: string) => {
  const response = await fetch(apiUrl('login'), {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  return response
}

export const logoutUser = async () => {
  const response = await fetch(apiUrl('logout'), {
    method: 'POST',
    credentials: 'include',
  })
  return response
}