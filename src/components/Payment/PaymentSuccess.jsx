import React from 'react'
import PayRedirectPage from '@/pages/PayRedirectPage/PayRedirectPage'


const props = {
  title: '결제 완료!',
  message: '결제 내역 가기',
  navigate: '/account',
}

const PaymentSuccess = () => {
  return (
    <>
      <PayRedirectPage {...props} />;
    </>
  )
}

export default PaymentSuccess
