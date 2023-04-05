import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const usePostUserInfo = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const postUserInfo = async (uid, wishLists) => {
    // console.log('uid', uid)
    // console.log('wishList', wishLists)
    try {
      setLoading(true)
      const res = await axiosFirebase.patch(`/users/${uid}.json`, { wishLists })
      // Object.values(res.data).flat()
      if (res.data) {
        const items = res.data.wishLists
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
