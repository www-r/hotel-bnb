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
      {rooms.length !== 0 ? (
        <S.PageContainer>
          <S.RoomListWrapper>
            <RoomList rooms={rooms} />
          </S.RoomListWrapper>
          <S.MapListWrapper>
            <MapList rooms={rooms} />
          </S.MapListWrapper>
        </S.PageContainer>
      ) : (
        '검색된 방이 없습니다'
      )}
    </>
  )
}

export default SearchPage
