import React, { useContext } from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import { LoginContext } from '@/contexts/LoginProvider'

import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = ({ rooms }) => {
  const currentUser = useContext(LoginContext)
  console.log('currentUser', currentUser)

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
