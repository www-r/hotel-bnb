import React, { useContext, useEffect } from 'react'
import usePayApproval from '@/hooks/usePayApproval'
import { LoginContext } from '@/contexts/LoginProvider'
import { UserContext } from '@/contexts/UserProvider'
import PayRedirectPage from '@/pages/PayRedirectPage/PayRedirectPage'
import { useLocation, useNavigate } from 'react-router-dom'
import usePostUserInfo from '@/hooks/usePostUserInfo'

const props = {
  title: '결제 진행중...',
}

const PaymentWaiting = () => {
  console.log('.......render')
  const currentUser = useContext(LoginContext)
  const userCtx = useContext(UserContext)

  const location = useLocation()
  const { postUserInfo } = usePostUserInfo()

  const navigate = useNavigate()
  const { postKaKaoPayApproval, data } = usePayApproval()
  const params = new URLSearchParams(location.search)
  const pg_token = params.get('pg_token')
  const tid = JSON.parse(localStorage.getItem(`tid`))
  const room = JSON.parse(localStorage.getItem(`paymentRoom`))
  // console.log(room)

  // console.log('tid', tid)
  // console.log('wait data', data)
  // console.log('pg_token', pg_token)

  const kakaoPayData = {
    cid: 'TC0ONETIME',
    tid,
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    pg_token,
  }

  const reservation = {
    title: room.title,
    price: room.price,
    reservationDays: '날짜',
  }

  useEffect(() => {
    userCtx.addItemToReservation(reservation)
    postKaKaoPayApproval(kakaoPayData)
  }, [])

  useEffect(() => {
    if (currentUser) {
      postUserInfo(currentUser?.uid, userCtx.userDetailInfo)
    }
  }, [userCtx.userDetailInfo.reservations, currentUser])

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate('/paymentSuccess')
      }, 3000)
    }
  }, [data])

  return (
    <>
      <PayRedirectPage {...props} />
    </>
  )
}

export default PaymentWaiting
