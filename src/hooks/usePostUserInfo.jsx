import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const usePostUserInfo = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const postUserInfo = async (uid, info) => {
    console.log('userDetailInfo', info)

    try {
      setLoading(true)
      const key = info.some((el) => typeof el === 'object') ? 'reservations' : 'wishlist'
      const res = await axiosFirebase.patch(`/users/${uid}.json`, { [key]: info })
      // Object.values(res.data).flat()
      if (res.data) {
        const items = res.data
        setData(items)
      } else {
        setData(null)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, postUserInfo }
}

export default usePostUserInfo
