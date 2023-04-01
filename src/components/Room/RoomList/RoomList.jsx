import React from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = ({ rooms, loading, error }) => {
  // console.log(loading)

  if (loading) return <div>loading...</div>
  if (error) return <div>에러가 발생</div>

  return (
    <S.Main>
      <S.Container>
        {rooms.map((room) => (
          <RoomItem room={room} key={room.id} />
        ))}
      </S.Container>
    </S.Main>
  )
}

export default RoomList
