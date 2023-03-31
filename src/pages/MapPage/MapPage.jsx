import React, { useState } from 'react'
import Map from '@/components/Map/Map'
import Header from '@/components/Common/Header/Header'
import MapButton from '../../components/Map/MapButton/MapButton'

const MapPage = () => {
  const [movePage, setMovePage] = useState('/')

  return (
    <>
      <Header />
      <Map />
      <MapButton movePage={movePage} />
    </>
  )
}

export default MapPage
