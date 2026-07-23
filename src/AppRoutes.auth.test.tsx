/**
 * @vitest-environment jsdom
 */
import React from 'react'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import AppProviders from './AppProviders'
import AppRoutes from './AppRoutes'

const authServiceMocks = vi.hoisted(() => ({
  checkAuthStatus: vi.fn(),
  loginUser: vi.fn(),
  logoutUser: vi.fn(),
}))

vi.mock('@/admin/context/authService', () => authServiceMocks)

vi.mock('@/components/Navbar', () => ({ default: () => null }))
vi.mock('@/components/PublicFooter', () => ({ default: () => null }))
vi.mock('@/components/ScrollToTop', () => ({ default: () => null }))
vi.mock('./pages/Home', () => ({ default: () => <main>Home route</main> }))
vi.mock('./pages/Work', () => ({ default: () => <main>Work route</main> }))
vi.mock('./admin/pages/CustomerGalleryPage', () => ({
  default: () => <main>Customer gallery route</main>,
}))
vi.mock('@/admin/components/Dashboard', () => ({
  Dashboard: ({ onLogout }: { onLogout: () => Promise<void> }) => (
    <button type="button" onClick={onLogout}>
      Logga ut från testdashboard
    </button>
  ),
}))

function renderRoute(path: string) {
  return render(
    <AppProviders>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </AppProviders>,
  )
}

describe('route-scoped authentication', () => {
  beforeEach(() => {
    authServiceMocks.checkAuthStatus.mockReset()
    authServiceMocks.loginUser.mockReset()
    authServiceMocks.logoutUser.mockReset()
    authServiceMocks.checkAuthStatus.mockResolvedValue({ ok: false })
    authServiceMocks.loginUser.mockResolvedValue({ ok: true })
    authServiceMocks.logoutUser.mockResolvedValue(undefined)
  })

  afterEach(() => {
    cleanup()
  })

  it.each([
    ['/', 'Home route'],
    ['/work', 'Work route'],
    ['/galleri/test-gallery', 'Customer gallery route'],
  ])('does not mount admin auth on %s', async (path, content) => {
    renderRoute(path)

    expect(await screen.findByText(content)).toBeTruthy()
    expect(authServiceMocks.checkAuthStatus).not.toHaveBeenCalled()
  })

  it('keeps one auth provider across login, dashboard and logout', async () => {
    renderRoute('/admin/login')

    expect(
      await screen.findByRole('heading', { name: 'Admin Login' }),
    ).toBeTruthy()
    await waitFor(() => {
      expect(authServiceMocks.checkAuthStatus).toHaveBeenCalledTimes(1)
    })

    fireEvent.change(screen.getByPlaceholderText('Lösenord'), {
      target: { value: 'test-password' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Logga in' }))

    expect(
      await screen.findByRole('button', {
        name: 'Logga ut från testdashboard',
      }),
    ).toBeTruthy()
    expect(authServiceMocks.loginUser).toHaveBeenCalledWith('test-password')
    expect(authServiceMocks.checkAuthStatus).toHaveBeenCalledTimes(1)

    fireEvent.click(
      screen.getByRole('button', { name: 'Logga ut från testdashboard' }),
    )

    await waitFor(() => {
      expect(authServiceMocks.logoutUser).toHaveBeenCalledTimes(1)
    })
    expect(
      await screen.findByRole('heading', { name: 'Admin Login' }),
    ).toBeTruthy()
    expect(authServiceMocks.checkAuthStatus).toHaveBeenCalledTimes(1)
  })

  it('checks auth before redirecting a direct admin visit', async () => {
    renderRoute('/admin')

    expect(await screen.findByText('Autentiserar...')).toBeTruthy()
    expect(
      await screen.findByRole('heading', { name: 'Admin Login' }),
    ).toBeTruthy()
    expect(authServiceMocks.checkAuthStatus).toHaveBeenCalledTimes(1)
  })
})
