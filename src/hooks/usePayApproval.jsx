import React, { useContext, useState } from 'react'
import { axiosKaKaoPay } from '@/apis/axios'

const usePayReady = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(false)

  const postKaKaoPayApproval = async (data) => {
    console.log('Approval', data)
    try {
      setLoading(true)
      const res = await axiosKaKaoPay.post('approve', data)
      setData(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { postKaKaoPayApproval, loading, error, data }
}

export default usePayReady
