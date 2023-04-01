import React, { useState, useContext } from 'react'
import { RoomsContext } from '@/contexts/RoomsProvider'

import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  return (
    <>
      <Header />
      <RoomList rooms={rooms} loading={loading} error={error} />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
