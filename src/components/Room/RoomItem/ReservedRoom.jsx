import React, { useState } from 'react'
import * as S from './ReservedRoom.style'
const ReservedRoomItem = () => {
  return (
    <S.Item>
      <div className="thumbnail"></div>
      <div className="info-wrapper">
        <div>
          <div className="room--info">
            <h2 className="room--name">{'이름'}</h2>
            <p className="room--location">
              <span>위치 : </span>
            </p>
          </div>
          <div className="reservation--info">
            <p className="reservation-period">
              <span>기간 : </span> {'예약 기간'}
            </p>
            <p className="reservation-price">
              <span>총 가격 : </span> <span>{'예약 금액'}</span>
            </p>
          </div>
        </div>
        <S.DivisionLineRow />
        <div className="room--rate">
          <span>별점 </span>
          <p>{false ? 4.5 : <button> 평가하기 </button>}</p>
        </div>
      </div>
      <S.PriceModal>
        <p>총 가격 = 방 가격 * 숙박일 + 수수료 + 세금</p>
      </S.PriceModal>
    </S.Item>
  )
}

export default ReservedRoomItem
