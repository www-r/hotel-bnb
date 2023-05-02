import React, { useState } from 'react'

import MapList from '@/components/Map/MapList/MapList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'

import '@/components/Map/map.css'
import { useQueryClient } from 'react-query'
import { queryKeys } from '@/utils/queryKeys'
import { useGetRooms } from '../../hooks/useGetRooms'

const MapPage = () => {
  console.log('...rendering')
  // const queryClient = useQueryClient()
  // const rooms = queryClient.getQueryData(queryKeys.rooms)
  const { rooms } = useGetRooms()

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
