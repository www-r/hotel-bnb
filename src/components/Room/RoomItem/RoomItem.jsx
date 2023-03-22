import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as S from '@/components/Room/RoomItem/RoomItem.style'
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
    <S.Container onClick={handleNavigateToRoomDetail}>
      <S.ImgContainer>
        <S.Img src={room.thumbnail} alt={room.id} />
      </S.ImgContainer>
      <S.Icon onClick={handleClickHeart}>
        <Heart fill={isClicked ? '#FF385C' : '#DDD'} />
      </S.Icon>
      <S.TextContainer>
        <S.Title>
          <h2> {room.title}</h2>
          <span>
            <AiFillStar /> {room.rating}
          </span>
        </S.Title>
        <div>{room.location}</div>
        <div>{formatDate(room.reservation)}</div>
        <div>￦ {formatPrice(room.price)} /박</div>
      </S.TextContainer>
    </S.Container>
  )
}

export default RoomItem
