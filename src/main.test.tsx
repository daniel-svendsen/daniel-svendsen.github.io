/**
 * @vitest-environment jsdom
 */
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const reactDomMocks = vi.hoisted(() => ({
  createRoot: vi.fn(),
  hydrateRoot: vi.fn(),
  render: vi.fn(),
}))

vi.mock('react-dom/client', () => ({
  createRoot: reactDomMocks.createRoot,
  hydrateRoot: reactDomMocks.hydrateRoot,
}))

vi.mock('./App', () => ({
  default: () => <main>Client app</main>,
}))

async function loadMain(rootContent = '') {
  document.body.innerHTML = `<div id="root">${rootContent}</div>`
  reactDomMocks.createRoot.mockReturnValue({
    render: reactDomMocks.render,
  })

  await import('./main')

  return document.getElementById('root')
}

describe('client bootstrap', () => {
  beforeEach(() => {
    vi.resetModules()
    reactDomMocks.createRoot.mockReset()
    reactDomMocks.hydrateRoot.mockReset()
    reactDomMocks.render.mockReset()
  })

  it('hydrates a root that contains prerendered markup', async () => {
    const rootElement = await loadMain('<main>Prerendered app</main>')

    expect(reactDomMocks.hydrateRoot).toHaveBeenCalledTimes(1)
    expect(reactDomMocks.hydrateRoot).toHaveBeenCalledWith(
      rootElement,
      expect.objectContaining({ type: React.StrictMode }),
    )
    expect(reactDomMocks.createRoot).not.toHaveBeenCalled()
    expect(reactDomMocks.render).not.toHaveBeenCalled()
  })

  it('mounts an empty app-shell root', async () => {
    const rootElement = await loadMain()

    expect(reactDomMocks.createRoot).toHaveBeenCalledTimes(1)
    expect(reactDomMocks.createRoot).toHaveBeenCalledWith(rootElement)
    expect(reactDomMocks.render).toHaveBeenCalledWith(
      expect.objectContaining({ type: React.StrictMode }),
    )
    expect(reactDomMocks.hydrateRoot).not.toHaveBeenCalled()
  })
})
