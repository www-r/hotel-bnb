import React, { useState, useContext } from 'react'
import { RoomsContext } from '@/contexts/RoomsProvider'

import MapList from '@/components/Map/MapList/MapList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'

import '@/components/Map/map.css'

const MapPage = () => {
  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx
  const [movePage, setMovePage] = useState('/')

  return (
    <>
      <Header />
      <MapList rooms={rooms} />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MapPage
