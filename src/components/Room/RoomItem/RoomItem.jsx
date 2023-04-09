import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as S from '@/components/Room/RoomItem/RoomItem.style'
import { formatDate, formatPrice } from '@/utils/format'
import { useNavigate } from 'react-router-dom'
import { Heart } from '@/assets/images'
import { UserContext } from '@/contexts/UserProvider'
import { LoginContext } from '@/contexts/LoginProvider'

import usePostUserInfo from '@/hooks/usePostUserInfo'

const RoomItem = ({ room }) => {
  const currentUser = useContext(LoginContext)

  const userCtx = useContext(UserContext)

  const { postUserInfo } = usePostUserInfo()

  const navigate = useNavigate()
  const handleNavigateToRoomDetail = () => {
    navigate(`/room/${room.id}`, {
      state: { ...room },
    })
  }

  const isWish = useMemo(
    () => userCtx?.userDetailInfo?.wishLists.some((item) => item.id === room.id),
    [userCtx.userDetailInfo.wishLists],
  )

  const handleToggleWish = (e) => {
    e.stopPropagation()

    if (!currentUser) {
      return alert('로그인해주세요')
    }

    !isWish ? userCtx.addItemToWish(room) : userCtx.deleteItemToWish(room)
  }

  useEffect(() => {
    postUserInfo(currentUser?.uid, userCtx.userDetailInfo)
  }, [userCtx.userDetailInfo.wishLists])

  return (
    <S.Container onClick={handleNavigateToRoomDetail}>
      <S.ImgContainer>
        <S.Img src={room.thumbnail} alt={room.id} />
      </S.ImgContainer>
      <S.Icon onClick={handleToggleWish}>
        <Heart
          fill={currentUser && isWish ? 'var(--color-main)' : 'var(--color-light-grey)'}
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
