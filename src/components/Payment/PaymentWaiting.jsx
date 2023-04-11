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
  const location = useLocation()

  const navigate = useNavigate()
  const { postKaKaoPayApproval, data } = usePayApproval()
  const params = new URLSearchParams(location.search)
  const pg_token = params.get('pg_token')
  const tid = JSON.parse(localStorage.getItem(`tid`))
  const room = JSON.parse(localStorage.getItem(`paymentRoom`))
  const { postUserInfo } = usePostUserInfo()

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
    id: room.id,
    reservationDays: '오늘',
  }

  const addItemToReservation = async () => {
    const prev = JSON.parse(localStorage.getItem(`${currentUser.uid}-reservation`))
    const reservations = [...prev, reservation]
    postUserInfo(currentUser?.uid, reservations)
  }

  useEffect(() => {
    postKaKaoPayApproval(kakaoPayData)
  }, [])

  useEffect(() => {
    if (currentUser) addItemToReservation(reservation)
  }, [currentUser])

  // useEffect(() => {
  //   if (currentUser) postUserInfo(currentUser?.uid, userCtx.reservations)
  // }, [userCtx.reservations, currentUser])

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
