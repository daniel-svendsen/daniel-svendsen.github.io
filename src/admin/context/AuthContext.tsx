import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { checkAuthStatus, logoutUser } from './authService'

interface AuthContextType {
  isLoggedIn: boolean
  isLoading: boolean
  login: () => void
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true)
      try {
        const response = await checkAuthStatus()
        setIsLoggedIn(response.ok)
      } catch (error) {
        console.error('Auth check failed', error)
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
      }
    }
    checkSession()
  }, [])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = async () => {
    await logoutUser()
    setIsLoggedIn(false)
  }

  const value = { isLoggedIn, isLoading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}