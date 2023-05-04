import React, { useState } from 'react'

import RoomList from '@/components/Room/RoomList/RoomList'
import Header from '@/components/Common/Header/Header'
import MapButton from '@/components/Map/MapButton/MapButton'
import { useGetRooms } from '../../hooks/useGetRooms'
import * as S from './MainPage.style'

const MainPage = () => {
  const [movePage, setMovePage] = useState('/map')

  const { rooms } = useGetRooms()
  console.log({ rooms })

  return (
    <>
      <Header />
      <S.RoomListWrapper>
        <RoomList rooms={rooms} />
      </S.RoomListWrapper>
      <MapButton movePage={movePage} />
    </>
  )
}

export default MainPage
