import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'content-type': 'application/json',
    apikey: `${import.meta.env.VITE_API_KEY}`,
    username: `${import.meta.env.VITE_USERNAME}`,
  },
})

