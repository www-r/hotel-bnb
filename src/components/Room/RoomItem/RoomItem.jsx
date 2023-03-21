import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as S from '@/components/Room/RoomItem/RoomItem.style'
import { RoomItemImg } from './RoomItem.style'
import { formatDate, formatPrice } from '@/utils/format'
import { useNavigate } from 'react-router-dom'
import { Heart } from '@/assets/images'

const RoomItem = ({ room }) => {
  const [isClicked, setIsClicked] = useState(false)

  const navigate = useNavigate()

  const handleNavigateToRoomDetail = () => {
    navigate(`/room/${room.id}`, {
      state: { ...room },
    })
  }

  const handleClickHeart = (e) => {
    e.stopPropagation()
    setIsClicked(!isClicked)
  }

  return (
    <S.RoomItem onClick={handleNavigateToRoomDetail}>
      <RoomItemImg src={room.thumbnail} alt={room.id} />
      <span onClick={handleClickHeart}>
        <Heart fill={isClicked ? 'red' : '#ccc'} />
      </span>
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
        <div>{formatDate(room.reservation)}</div>
        <div>￦ {formatPrice(room.price)} /박</div>
      </div>
    </S.RoomItem>
  )
}

export default RoomItem
