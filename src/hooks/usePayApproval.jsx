import React, { useContext, useState } from 'react'
import { axiosKaKaoPay } from '@/apis/axios'

const usePayApproval = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(false)

  const postKaKaoPayApproval = async (info) => {
    console.log('Approval', info)
    try {
      setLoading(true)
      const res = await axiosKaKaoPay.post('approve', info)
      setData(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { postKaKaoPayApproval, loading, error, data }
}

export default usePayApproval
