import React, { useContext, useEffect } from 'react'
import usePayApproval from '@/hooks/usePayApproval'
import { LoginContext } from '@/contexts/LoginProvider'
import PayRedirectPage from '@/pages/PayRedirectPage/PayRedirectPage'
import { useNavigate } from 'react-router-dom'

const props = {
  title: '결제 진행중...',
}

const PaymentWaiting = () => {
  console.log('render')
  const currentUser = useContext(LoginContext)
  const navigate = useNavigate()
  const { postKaKaoPayApproval, data } = usePayApproval()
  const params = new URLSearchParams(location.search)
  const pg_token = params.get('pg_token')
  const tid = JSON.parse(localStorage.getItem(`tid`))

  console.log('tid', tid)
  console.log('wait data', data)
  console.log('pg_token', pg_token)

  const kakaoPayData = {
    cid: 'TC0ONETIME',
    tid,
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    pg_token,
  }

  useEffect(() => {
    postKaKaoPayApproval(kakaoPayData)
  }, [])

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate('/paymentSuccess')
      }, 3000)
    }
  }, [data])

  return (
    <>
      <PayRedirectPage {...props} />;
    </>
  )
}

export default PaymentWaiting
