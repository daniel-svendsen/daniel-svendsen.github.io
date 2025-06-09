import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/admin/context/AuthContext'

export const ProtectedRoute = () => {
  const { isLoggedIn, isLoading } = useAuth()

  if (isLoading) {
    return <div className="pt-20 text-center">Autentiserar...</div>
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />
}