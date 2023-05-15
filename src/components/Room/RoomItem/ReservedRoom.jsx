import React from 'react'
import * as S from './ReservedRoom.style'
const ReservedRoomItem = () => {
  return (
    <S.Item>
      <div className="thumbnail"></div>
      <div className="reservation-info">
        <div>
          <h2>{'숙소이름'}</h2>
          <p>{'숙소 위치'}</p>
          <p>{'예약 총 가격'}</p>
        </div>
        <div>{'별점'}</div>
      </div>
    </S.Item>
  )
}

export default ReservedRoomItem
