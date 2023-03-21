import React from 'react'
import useGetRooms from '@/hooks/useGetRooms'
import RoomItem from '@/components/Room/RoomItem/RoomItem'

const RoomList = () => {
  const rooms = useGetRooms('/rooms')

  return (
    <main style={{ paddingTop: '80px' }}>
      {rooms.map((room) => (
        <RoomItem room={room} key={room.id} />
      ))}
    </main>
  )
}

export default RoomList
