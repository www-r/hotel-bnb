import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as S from '@/components/Room/RoomItem/RoomItem.style'
import { RoomItemImg } from './RoomItem.style'
import { formatDate, formatPrice } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

const RoomItem = ({ room }) => {
  const navigate = useNavigate()

  const handleNavigateToRoomDetail = () => {
    navigate(`/room/${room.id}`, {
      state: { ...room },
    })
  }

  return (
    <S.RoomItem onClick={handleNavigateToRoomDetail}>
      <RoomItemImg src={room.thumbnail} alt={room.id} />
      <div>
        <S.RoomItemTitle>
          <h2> {room.title}</h2>
          <div>
            <span>
              <AiFillStar />
            </span>
            <span>{room.rating}</span>
          </div>
        </S.RoomItemTitle>
        <div>{room.location}</div>
        <div>
          {formatDate(room.reservation.start)} ~ {formatDate(room.reservation.end)}
        </div>
        <div>￦ {formatPrice(room.price)} /박</div>
      </div>
    </S.RoomItem>
  )
}

export default RoomItem
