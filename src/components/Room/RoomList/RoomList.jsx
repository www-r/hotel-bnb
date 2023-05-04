import React, { useContext } from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'

import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = ({ rooms }) => {
  return (
    <>
      {rooms.map((room) => (
        <RoomItem room={room} key={room.id} />
      ))}
    </>
  )
}

export default RoomList
