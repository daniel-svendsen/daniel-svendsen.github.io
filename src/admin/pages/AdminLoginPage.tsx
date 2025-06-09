import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/admin/context/AuthContext'
import { loginUser } from '@/admin/context/authService'
import { Button } from '@/components/Button'
import { Input } from '@/admin/components/Input'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      const response = await loginUser(password)
      if (!response.ok) {
        throw new Error('Fel lösenord.')
      }
      auth.login()
      navigate('/admin')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ett fel uppstod.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" bg-custom-beige flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 space-y-4 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lösenord"
          required
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Loggar in...' : 'Logga in'}
        </Button>
        {error && (
          <p className="text-sm text-center text-destructive">{error}</p>
        )}
      </form>
    </div>
  )
}