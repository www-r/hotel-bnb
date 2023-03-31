import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const useGetData = (url = '') => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchRoomsData = async () => {
    try {
      setLoading(true)
      const res = await axiosFirebase.get(`${url}.json`)
      const rooms = Object.values(res.data).flat()
      setData(rooms)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRoomsData()
  }, [url])

  return { data, loading, error }
}

export default useGetData
