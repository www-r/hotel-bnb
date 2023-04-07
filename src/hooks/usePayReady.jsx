import React, { useContext, useState } from 'react'
import { axiosKaKaoPay } from '@/apis/axios'
import { LoginContext } from '@/contexts/LoginProvider'

const usePayReady = () => {
  const currentUser = useContext(LoginContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(false)

  const postKaKaoPay = async (data) => {
    console.log('post', data)
    try {
      setLoading(true)
      const res = await axiosKaKaoPay.post('ready', data)
      setData(res.data)
      localStorage.setItem(`tid`, JSON.stringify(res.data.tid))
      console.log('res', res)
      window.location.href = res.data.next_redirect_pc_url
    } catch (err) {
      setError(err.message)
      console.log(err.message)
      console.log('!Error data', Error)
    } finally {
      setLoading(false)
      console.log('Error data', Error)
    }
  }

  return { postKaKaoPay, loading, error, data }
}

export default usePayReady
