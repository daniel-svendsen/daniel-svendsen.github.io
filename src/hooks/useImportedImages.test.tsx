/**
 * @vitest-environment jsdom
 */
import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  type ImportedImageFolder,
  useImportedImages,
} from './useImportedImages'

interface HookProps {
  folders: readonly ImportedImageFolder[]
}

describe('useImportedImages', () => {
  it('loads every image from each requested folder', async () => {
    const { result } = renderHook(() =>
      useImportedImages(['portraits', 'weddings', 'carousel']),
    )

    await waitFor(() => {
      expect(result.current.portraits).toHaveLength(15)
      expect(result.current.weddings).toHaveLength(23)
      expect(result.current.carousel).toHaveLength(24)
    })
  })

  it('does not reload for a new array with the same folder keys', async () => {
    const { result, rerender } = renderHook(
      ({ folders }: HookProps) => useImportedImages(folders),
      { initialProps: { folders: ['portraits'] } },
    )

    await waitFor(() => {
      expect(result.current.portraits).toHaveLength(15)
    })
    const firstResult = result.current

    rerender({ folders: ['portraits'] })
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(result.current).toBe(firstResult)
  })

  it('loads again when the requested folder key changes', async () => {
    const { result, rerender } = renderHook(
      ({ folders }: HookProps) => useImportedImages(folders),
      { initialProps: { folders: ['portraits'] } },
    )

    await waitFor(() => {
      expect(result.current.portraits).toHaveLength(15)
    })

    rerender({ folders: ['weddings'] })

    await waitFor(() => {
      expect(result.current.weddings).toHaveLength(23)
      expect(result.current.portraits).toBeUndefined()
    })
  })
})
