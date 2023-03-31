import React from 'react'
import axios from 'axios'

export const kakaoPayConfig = {
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KP_ADMIN_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
}

const usePay = (data) => {
  // const [kakaopayment, setKakaoPayment] = useState(null)

  const postKaKaoPay = async () => {
    const res = await axios.post('https://kapi.kakao.com/v1/payment/ready', data, kakaoPayConfig)
    console.log(res)
    window.location.href = res.data.next_redirect_pc_url
  }

  return { postKaKaoPay }
}

export default usePay
