import React, { useState, useEffect } from 'react'
import { axiosFirebase } from '@/apis/axios'

const useGetRooms = (url = '') => {
  const [data, setData] = useState()
  console.log('data', data)

  const FetchRoomsData = async () => {
    const res = await axiosFirebase.get(`${url}.json`)
    const rooms = Object.values(res.data).flat()
    setData(rooms)
  }

  useEffect(() => {
    FetchRoomsData()
  }, [url])

  return data
}

export default useGetRooms
