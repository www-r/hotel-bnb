import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as S from '@/components/Room/RoomItem/RoomItem.style'
import { formatDate, formatPrice } from '@/utils/format'
import { useNavigate } from 'react-router-dom'
import { Heart } from '@/assets/images'
import { LoginContext } from '@/contexts/LoginProvider'
import { useWishStore } from '../../../store/wishStore'

const RoomItem = ({ room }) => {
  const currentUser = useContext(LoginContext)
  const [isWish, setIsWish] = useState()
  const { addWish, deleteWish, wishlist } = useWishStore()

  const navigate = useNavigate()
  const handleMoveRoomDetail = () => {
    navigate(`/room/${room.id}`, {
      state: { ...room },
    })
  }

  useEffect(() => {
    setIsWish(wishlist.some((id) => id === room.id))
  }, [])

  const handleToggleWish = (e) => {
    setIsWish((prev) => !prev)
    e.stopPropagation()

    if (!currentUser) {
      return alert('로그인해주세요')
    }

    !isWish ? addWish(room.id) : deleteWish(room.id)
  }

  return (
    <S.Container onClick={handleMoveRoomDetail}>
      <S.ImgContainer img={room.thumbnail} />
      <S.Icon onClick={handleToggleWish}>
        <Heart
          fill={currentUser && isWish ? 'var(--color-heart)' : 'var(--color-light-grey)'}
          width={24}
          height={24}
        />
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
