import React, { useContext } from 'react'
import * as S from './ModalSearchByDate.style'
import Calendar from '@/components/Common/Calendar'
import { getMonthDate, getNightAndDay } from '../../../../../../utils/format'

const ModalSearchByDate = ({ show, checkIn, checkOut, setCheckIn, setCheckOut }) => {
  return (
    <S.Container show={show}>
      <S.TitleContainer>날짜로 검색하기</S.TitleContainer>
      <Calendar setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
      <S.NightDayConatiner>
        <p>{checkOut ? getNightAndDay(checkIn, checkOut) : ''}</p>
        <p>{checkOut ? `${getMonthDate(checkIn)} ~ ${getMonthDate(checkOut)}` : ''}</p>
      </S.NightDayConatiner>
    </S.Container>
  )
}

export default ModalSearchByDate
