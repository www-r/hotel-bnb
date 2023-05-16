import React, { useState } from 'react'
import { useGetRooms } from '@/hooks/useGetRooms'
import * as S from './ReservedRoom.style'

const ReservedRoomItem = (props) => {
  console.log('props:', props)
  const reservationId = props?.reservationId
  const roomId = props?.roomId
  const dates = props?.dates
  const price = props?.price
  // const rate = props?.rate
  // const { rooms } = useGetRooms()
  const rooms = props?.rooms
  const foundRoom = rooms && rooms?.find((room) => room.id === roomId)
  console.log('foundRoom:', foundRoom)
  const thumbnail = foundRoom.thumbnail
  const location = foundRoom.location
  return (
    <S.Item>
      <S.Thumbnail thumbnail={thumbnail} />
      <S.InfoWrapper>
        <p className="reservation--id">{reservationId}</p>
        <S.DivisionLineRow />
        <S.InfoItemBold>{location}</S.InfoItemBold>
        <S.DivisionLineRow />
        <div className="reservation--info">
          <div className="reservation--period">
            <div>
              <span>체크인</span>
              <S.InfoItemBold>{dates[0]}</S.InfoItemBold>
            </div>
            <div>
              <span>체크아웃</span>
              <S.InfoItemBold>{dates[dates.length - 1]}</S.InfoItemBold>
            </div>
          </div>
          <S.DivisionLineRow />
          ★☆
          <div className="reservation--price">
            <span>총 가격</span>
            <S.InfoItemBold>₩{price}</S.InfoItemBold>
          </div>
        </div>

        {/* <S.DivisionLineRow />
        <div className="room--rate">
          <span>별점 </span>
          <p>{rate || <button> 평가하기 </button>}</p>
        </div> */}
      </S.InfoWrapper>
    </S.Item>
  )
}

export default ReservedRoomItem
