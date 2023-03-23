import React from 'react'
import useGetRooms from '@/hooks/useGetRooms'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = () => {
  const rooms = useGetRooms('/rooms')

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
