import React from 'react'
import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'

const MainPage = () => {
  return (
    <>
      <Header />
      <RoomList />
      <MapButton />
    </>
  )
}

export default MainPage
