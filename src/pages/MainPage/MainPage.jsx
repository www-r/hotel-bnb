import React, { useState } from 'react'

import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'
import { useGetRooms } from '../../hooks/useGetRooms'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  const { rooms } = useGetRooms()
  console.log({ rooms })

  return (
    <>
      <Header />
      <RoomList rooms={rooms} />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
