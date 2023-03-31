import React, { useState } from 'react'
import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  return (
    <>
      <Header />
      <RoomList />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
