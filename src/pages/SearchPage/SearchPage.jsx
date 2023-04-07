import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '@/components/Common/Header/Header'
import RoomList from '@/components/Room/RoomList/RoomList'
import MapList from '@/components/Map/MapList/MapList'
import * as S from './SearchPage.style'

const SearchPage = () => {
  const location = useLocation()
  const rooms = location.state.res

  return (
    <>
      <Header />
      <S.PageContainer>
        <RoomList rooms={rooms} />
        <MapList rooms={rooms} />
      </S.PageContainer>
    </>
  )
}

export default SearchPage
