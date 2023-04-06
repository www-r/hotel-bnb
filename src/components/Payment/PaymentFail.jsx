import React from 'react'
import PayRedirectPage from '@/pages/PayRedirectPage/PayRedirectPage'

const props = {
  title: '결제 실패!',
  message: '다시 결제하기',
  navigate: -1,
}

const PaymentFail = () => {
  return (
    <>
      <PayRedirectPage {...props} />;
    </>
  )
}

export default PaymentFail
