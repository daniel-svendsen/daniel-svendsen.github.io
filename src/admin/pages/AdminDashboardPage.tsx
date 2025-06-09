import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/admin/context/AuthContext'
import { Dashboard } from '@/admin/components/Dashboard'

export default function AdminDashboardPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/admin/login')
  }

  return <Dashboard onLogout={handleLogout} />
}