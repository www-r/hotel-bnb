import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '@/components/Common/Header/Header'
import RoomList from '@/components/Room/RoomList/RoomList'
import MapList from '@/components/Map/MapList/MapList'
import * as S from './SearchPage.style'

const SearchPage = () => {
  const location = useLocation()
  const rooms = location.state.res
  console.log(location.state)

  return (
    <>
      <Header />
      <S.PageContainer>
        {rooms.length !== 0 ? (
          <>
            <RoomList rooms={rooms} />
            <MapList rooms={rooms} />
          </>
        ) : (
          '검색된 방이 없습니다'
        )}
      </S.PageContainer>
    </>
  )
}

export default SearchPage
