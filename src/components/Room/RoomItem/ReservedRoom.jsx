import React, { useState } from 'react'
import { useGetRooms } from '@/hooks/useGetRooms'
import * as S from './ReservedRoom.style'

const ReservedRoomItem = ({ reservation }) => {
  // const rate = props?.rate
  const { rooms } = useGetRooms()

  const foundRoom = rooms && rooms?.find((room) => room.id === reservation.roomId)
  console.log('foundRoom:', foundRoom)
  const thumbnail = foundRoom.thumbnail
  const location = foundRoom.location
  return (
    <S.Item>
      <S.Thumbnail thumbnail={thumbnail} />
      <S.InfoWrapper>
        <p className="reservation--id">{reservation.reservationId}</p>
        <S.DivisionLineRow />
        <S.InfoItemBold>{location}</S.InfoItemBold>
        <S.DivisionLineRow />
        <div className="reservation--info">
          <div className="reservation--period">
            <div>
              <span>체크인</span>
              <S.InfoItemBold>{reservation.reservationDates[0]}</S.InfoItemBold>
            </div>
            <div>
              <span>체크아웃</span>
              <S.InfoItemBold>
                {reservation.reservationDates[reservation.reservationDates.length - 1]}
              </S.InfoItemBold>
            </div>
          </div>
          <S.DivisionLineRow />
          ★☆
          <div className="reservation--price">
            <span>총 가격</span>
            <S.InfoItemBold>₩{reservation.reservationPrice}</S.InfoItemBold>
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
