import { getFilms } from "api/services"
import { useState, useEffect, useCallback, useMemo } from "react"
import { IData } from "types/IData"

interface IUseData {
  data: IData
  loading: boolean
  error: boolean
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const INITIAL_STATE: IData = { films: [], pageNumber: 0 }

export function useData(): IUseData {
  const [data, setData] = useState<IData>(INITIAL_STATE)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleDataPage = useCallback(async () => {
    if (loading) return // Prevent concurrent requests

    try {
      setLoading(true)
      setError(false)
      const dataFilms = await getFilms(page)
      setData(dataFilms)
    } catch (err) {
      console.error("Error fetching films:", err)
      setData(INITIAL_STATE)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [page, loading])

  useEffect(() => {
    handleDataPage()
  }, [handleDataPage])

  return useMemo(
    () => ({
      data,
      loading,
      error,
      page,
      setPage,
    }),
    [data, loading, error, page, setPage],
  )
}
