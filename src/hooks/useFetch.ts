import { useEffect, useState } from 'react'

function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data: T) => {
        setData(data)
        setLoading(false)
      })
      .catch((error: Error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [url, options])

  return { data, loading, error }
}

export default useFetch