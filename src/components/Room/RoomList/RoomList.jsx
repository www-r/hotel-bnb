import React, { useContext } from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import { RoomsContext } from '@/contexts/RoomsProvider'
import { LoginContext } from '@/contexts/LoginProvider'

import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = () => {
  const currentUser = useContext(LoginContext)
  console.log('currentUser', currentUser)

  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  if (loading) return <div>loading...</div>
  if (error) return <div>에러가 발생</div>

  return (
    <S.Main>
      <S.Container>
        {rooms.map((room) => (
          <RoomItem room={room} key={room.id} currentUser={currentUser} />
        ))}
      </S.Container>
    </S.Main>
  )
}

export default RoomList
