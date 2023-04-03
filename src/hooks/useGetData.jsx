import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const useGetData = (url = '') => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axiosFirebase.get(`${url}.json`)
      setData(res.data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useGetData
