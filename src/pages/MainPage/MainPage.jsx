import React, { useState, useContext } from 'react'
import { RoomsContext } from '@/contexts/RoomsProvider'

import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'
import { UsersContext } from '../../contexts/UsersProvider'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  const user = useContext(UsersContext)

  return (
    <>
      <Header user={user.user} loading={user.loading} error={user.error} />
      <RoomList rooms={rooms} loading={loading} error={error} />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
