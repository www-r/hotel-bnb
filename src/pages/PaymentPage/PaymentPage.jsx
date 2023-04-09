import React from 'react'
import usePayReady from '@/hooks/usePayReady'
import { useLocation } from 'react-router-dom'

const PaymentPage = () => {
  const location = useLocation()
  const room = location.state
  console.log('room', location.state)

  const { postKaKaoPay } = usePayReady()

  const kakaoPayData = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: room.title,
    quantity: 1,
    total_amount: room.price,
    vat_amount: Math.floor(room.price / 10),
    tax_free_amount: 0,
    approval_url: 'http://localhost:3000/paymentWaiting',
    fail_url: 'http://localhost:3000/paymentFail',
    cancel_url: 'http://localhost:3000/paymentFail',
  }

  const handleClick = () => {
    postKaKaoPay(kakaoPayData)
    localStorage.setItem(`paymentRoom`, JSON.stringify(room))
  }

  return (
    <div>
      ReservationDetailPage
      <button onClick={handleClick}>결제하기</button>
    </div>
  )
}

export default PaymentPage
