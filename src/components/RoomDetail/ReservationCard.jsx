import React, { useState } from 'react'
//style
import * as S from './ReservationCard.style'
//icon
import { FlagIcon, IconMinus, IconPlus } from '@/assets/images/index.js'
const ReservationCard = (props) => {
  const checkInDate = props.checkInDate
  const checkOutDate = props.checkOutDate
  const roomPricePerDay = props.roomPricePerDay
  const roomRating = props.roomRating
  const rates = props.rates
  const handleReservationBtn = props.handleReservationBtn
  const numberOfPeople = props.numberOfPeople
  const setNumberOfPeople = props.setNumberOfPeople
  const bringPaymentData = props.bringPaymentData
  const checkInDateNumber = Number(checkInDate.replace(/-/g, ''))
  const checkOutDateNumber = Number(checkOutDate.replace(/-/g, ''))
  const roomDays = checkOutDateNumber - checkInDateNumber
  const roomTotalPrice = Number(roomPricePerDay) * (checkOutDate && roomDays)
  const roomExtraFee = Math.ceil(roomTotalPrice && roomTotalPrice * 0.07)
  const roomTax = Math.ceil(roomTotalPrice && roomTotalPrice * 0.02)

  const liftPaymentData = (data) => {
    return bringPaymentData(data)
  }
  return (
    <>
      <S.ReservationCard>
        <S.ReservationCardTitle>
          <div className="price-per-day">
            ₩{roomPricePerDay} <span>/{checkOutDate && roomDays}박</span>
          </div>
          <div className="star-rate">
            <div className="star-rate--number">★{roomRating}</div>
            <span>·</span>
            <span className="star-rate--amount">후기{rates.length}개</span>
          </div>
        </S.ReservationCardTitle>
        <S.ReservationCardInfo>
          <div className="reservation-info">
            <div
              className="reservation--date"
              onClick={() => {
                scrollTo(0, 1300)
              }}
            >
              <div className="check-in--date  reservation-info--item">
                <span className="reservation-info--title">체크인</span>
                <span className="reservation-info--value">{checkInDate}</span>
              </div>
              <div className="check-out--date  reservation-info--item">
                <span className="reservation-info--title label--check-out">체크아웃</span>
                <span className="reservation-info--value value--check-out">{checkOutDate}</span>
              </div>
            </div>
            <S.DivisionLineRow />
            <div className="reservation--number-of-people reservation-info--item">
              <div>
                <span className="reservation-info--title">인원</span>
                <div className="number-of-people--value reservation-info--value">
                  게스트 {numberOfPeople < 0 ? setNumberOfPeople(0) : numberOfPeople} 명
                </div>
              </div>
              <div className="number-of-people--counter">
                <div className="buttons">
                  <button
                    onClick={() => {
                      setNumberOfPeople(numberOfPeople - 1)
                    }}
                  >
                    <IconMinus />
                  </button>
                  <span>{numberOfPeople < 0 ? setNumberOfPeople(0) : numberOfPeople}</span>
                  <button>
                    <IconPlus
                      onClick={() => {
                        setNumberOfPeople(numberOfPeople + 1)
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="reservation-button"
            onClick={() => {
              handleReservationBtn({
                checkInDate,
                checkOutDate,
                numberOfPeople,
                roomDays,
                roomTotalPrice,
                roomExtraFee,
                roomTax,
                roomRating,
              })
            }}
          >
            예약하기
          </button>
          <p className="reservation-pre-message">예약 확정 전에는 요금이 청구되지 않습니다.</p>
        </S.ReservationCardInfo>
        <S.ReservationCardPrice>
          <div className="reservation-price--calculate">
            <div className="price--basic">
              <span className="price-calculate--per-day">
                ₩{roomPricePerDay.toLocaleString()} x {checkOutDate && roomDays}박
              </span>
              <span className="price-calculate--total">₩{roomTotalPrice.toLocaleString()}</span>
            </div>
            <div className="price--extra">
              <span>호텔비앤비 서비스 수수료</span>
              <span>₩{roomExtraFee.toLocaleString()}</span>
            </div>
            <div className="price--tax">
              <span>세금</span>
              <span>₩{roomTax.toLocaleString()}</span>
            </div>
          </div>
          <S.DivisionLineRow />
          <div className="reservation-price--total">
            <span>총 합계</span>
            <span>₩{(roomTotalPrice + roomExtraFee + roomTax).toLocaleString()}</span>
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
