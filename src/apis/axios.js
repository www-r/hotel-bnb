import axios from 'axios'

export const axiosFirebase = axios.create({
  baseURL: `${import.meta.env.VITE_FB_BASE_URL}`,
})

export const axiosKaKaoPay = axios.create({
  baseURL: `${import.meta.env.VITE_KP_BASE_URL}`,
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KP_ADMIN_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
})
