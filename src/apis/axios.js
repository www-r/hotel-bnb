import axios from 'axios'

export const axiosFirebase = axios.create({
  baseURL: `${import.meta.env.VITE_FB_BASE_URL}`,
})
