import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const usePostUserInfo = (uid, wishiLists) => {
  console.log('uid', uid)
  console.log('wishList', wishiLists)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const postUserInfo = async () => {
    try {
      setLoading(true)
      const res = await axiosFirebase.patch(`/users/${uid}.json`, { wishiLists })
      console.log(res)
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

  useEffect(() => {
    postUserInfo()
  }, [uid, wishiLists])

  return { data, loading, error }
}

export default usePostUserInfo
