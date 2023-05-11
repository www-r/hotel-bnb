import React from 'react'
//style
import * as S from './ReservationCard.style'
//icon
import { FlagIcon } from '@/assets/images/index.js'
const ReservationCard = ({ roomPricePerDay, roomRating }) => {
  return (
    <>
      <S.ReservationCard>
        <S.ReservationCardTitle>
          <div className="price-per-day">
            ₩{roomPricePerDay} <span>/박</span>
          </div>
          <div className="star-rate">
            <div className="star-rate--number">★{roomRating}</div>
            <span>·</span>
            <span className="star-rate--amount">별점 3개</span>
          </div>
        </S.ReservationCardTitle>
        <S.ReservationCardInfo>
          <div className="reservation-info">
            <div className="reservation--date">
              <div className="check-in--date  reservation-info--item">
                <span className="reservation-info--title">체크인</span>
                <span className="reservation-info--value"></span>
              </div>
              <div className="check-out--date  reservation-info--item">
                <span className="reservation-info--title label--check-out">체크아웃</span>
                <span className="reservation-info--value"></span>
              </div>
            </div>
            <S.DivisionLineRow />
            <div className="reservation--number-of-people reservation-info--item">
              <span className="reservation-info--title">인원</span>
              <div className="reservation-info--value">게스트 1명</div>
              <div className="number-of-people--selector"></div>
            </div>
          </div>
          <button className="reservation-button">예약하기</button>
          <p className="reservation-pre-message">예약 확정 전에는 요금이 청구되지 않습니다.</p>
        </S.ReservationCardInfo>
        <S.ReservationCardPrice>
          <div className="reservation-price--calculate">
            <div className="price--basic">
              <span className="price-calculate--per-day">
                ₩{296800} x {5}박
              </span>
              <span className="price-calculate--total">₩{1484000}</span>
            </div>
            <div className="price--extra">
              <span>호텔비앤비 서비스 수수료</span>
              <span></span>
            </div>
          </div>
          <S.DivisionLineRow />
          <div className="reservation-price--total">
            <span>총 합계</span>
            <span>₩1,484,000</span>
          </div>
        </S.ReservationCardPrice>
        <S.ReportRoomButton>
          <FlagIcon />
          숙소 신고하기
        </S.ReportRoomButton>
      </S.ReservationCard>
    </>
  )
}

export default ReservationCard
