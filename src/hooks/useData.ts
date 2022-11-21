import { getFilms } from "api/services"
import { useState, useEffect, useCallback } from "react"
import { IData } from "types/IData"

interface IUseData {
  data: IData
  loading: boolean
  error: boolean
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const initialSate = { films: [], pageNumber: 0 }

export function useData(): IUseData {
  const [data, setData] = useState<IData>(initialSate)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleDataPage = useCallback(async () => {
    try {
      setLoading(true)
      const dataFilms = await getFilms(page)
      setData(dataFilms)
      setError(false)
    } catch (err) {
      console.error(err)
      setData(initialSate)
      setError(true)
    }
    setLoading(false)
  }, [page])

  useEffect(() => {
    handleDataPage()
  }, [handleDataPage])
  return {
    data,
    loading,
    error,
    page,
    setPage,
  }
}
