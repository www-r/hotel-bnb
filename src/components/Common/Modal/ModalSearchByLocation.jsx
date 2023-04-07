import React from 'react'
import * as S from './ModalSearchByLocation.style'

const ModalSearchByLocation = ({ show }) => {
  return (
    <S.Container show={show}>
      <S.TitleContainer>지역으로 검색하기</S.TitleContainer>
      <S.Wrapper>
        <S.LocationImage src="/src/assets/images/SearchLocation/Gyeonggi.png" />
        <S.LocationImage src="/src/assets/images/SearchLocation/Gangwon.png" />
        <S.LocationImage src="/src/assets/images/SearchLocation/Jeju.png" />
        <S.LocationImage src="/src/assets/images/SearchLocation/North_Chungcheong.png" />
        <S.LocationImage src="/src/assets/images/SearchLocation/North_Jeolla.png" />
        <S.LocationImage src="/src/assets/images/SearchLocation/South_Gyeongsang.png" />
      </S.Wrapper>
    </S.Container>
  )
}

export default ModalSearchByLocation
