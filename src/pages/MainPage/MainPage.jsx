import React, { useState, useContext } from 'react'

import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'
import { RoomsContext } from '@/contexts/RoomsProvider'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  if (loading) return <div>loading...</div>
  if (error) return <div>에러가 발생</div>

  return (
    <>
      <Header />
      <RoomList rooms={rooms} />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
