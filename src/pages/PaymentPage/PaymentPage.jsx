import React from 'react'
import usePay, { kakaoPayConfig } from '@/hooks/usePay'
import axios from 'axios'

const data = {
  cid: 'TC0ONETIME',
  partner_order_id: 'partner_order_id2',
  partner_user_id: 'partner_user_id2',
  item_name: `호텔`,
  quantity: 2,
  total_amount: 30000,
  vat_amount: 20,
  tax_free_amount: 0,
  approval_url: 'http://localhost:3000/',
  fail_url: 'http://localhost:3000/',
  cancel_url: 'http://localhost:3000/',
}

const PaymentPage = () => {
  // const { postKaKaoPay } = usePay()
  const postKaKaoPay = async () => {
    const res = await axios.post('https://kapi.kakao.com/v1/payment/ready', data, kakaoPayConfig)
    console.log(res)
    window.location.href = res.data.next_redirect_pc_url
  }

  const handleClick = () => {
    postKaKaoPay(data)
  }

  return (
    <div>
      ReservationDetailPage
      <button onClick={handleClick}>결제하기</button>
    </div>
  )
}

export default PaymentPage
