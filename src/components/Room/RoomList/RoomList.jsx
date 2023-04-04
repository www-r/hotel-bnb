import React, { useContext } from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import { RoomsContext } from '@/contexts/RoomsProvider'
import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = () => {
  // console.log(loading)
  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  if (loading) return <div>loading...</div>
  if (error) return <div>에러가 발생</div>

  return (
    <S.Main>
      <S.Container>
        {Array.from(rooms).map((room) => (
          <RoomItem room={room} key={room.id} />
        ))}
      </S.Container>
    </S.Main>
  )
}

export default RoomList
