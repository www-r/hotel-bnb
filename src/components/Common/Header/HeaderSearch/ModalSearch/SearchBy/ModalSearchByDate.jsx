import React from 'react'
import * as S from './ModalSearchByDate.style'
import Calendar from '@/components/Common/Calendar'

const ModalSearchByDate = ({ show }) => {
  return (
    <S.Container show={show}>
      <S.TitleContainer>날짜로 검색하기</S.TitleContainer>
      <Calendar />
    </S.Container>
  )
}

export default ModalSearchByDate
