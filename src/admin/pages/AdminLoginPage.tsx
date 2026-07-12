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
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f2] px-4 text-textPrimary">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-[1.5rem] border border-black/6 bg-white p-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.55)]"
      >
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-textSecondary">
            Svendsén Photography
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Admin Login</h1>
        </div>
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
