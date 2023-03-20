import React from 'react'
import useGetRooms from '@/hooks/useGetRooms'
import { AiFillStar } from 'react-icons/ai'

const RoomList = () => {
  const rooms = useGetRooms('/rooms')

  return (
    <div>
      {rooms.map((room) => (
        <div key={room.id}>
          <img src={room.img} alt="" />
          <div>
            <div>{room.title}</div>
            <div>{room.location}</div>
            <div>
              {room.reservation.start}~{room.reservation.start}
            </div>
            <div>{room.price} /박</div>
            <span>
              <span>
                <AiFillStar />
              </span>
              <span>{room.rating}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomList
