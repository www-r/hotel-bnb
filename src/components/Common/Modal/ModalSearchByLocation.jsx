import React, { useContext } from 'react'
import * as S from './ModalSearchByLocation.style'
import { RoomsContext } from '../../../contexts/RoomsProvider'
import { useNavigate } from 'react-router-dom'

const ModalSearchByLocation = ({ show, click }) => {
  const { rooms } = useContext(RoomsContext)
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (e.target.tagName === 'IMG') {
      const res = rooms.filter((room) => room.location.includes(e.target.alt))
      navigate(`/search/${e.target.alt}`, {
        state: { res },
      })
      click(false)
    }
  }
  return (
    <S.Container show={show}>
      <S.TitleContainer>지역으로 검색하기</S.TitleContainer>
      <S.Wrapper onClick={handleClick}>
        <S.LocationImage src="/src/assets/images/SearchLocation/Gyeonggi.png" alt="경기도" />
        <S.LocationImage src="/src/assets/images/SearchLocation/Gangwon.png" alt="강원도" />
        <S.LocationImage src="/src/assets/images/SearchLocation/Jeju.png" alt="제주도" />
        <S.LocationImage
          src="/src/assets/images/SearchLocation/North_Chungcheong.png"
          alt="충청북도"
        />
        <S.LocationImage src="/src/assets/images/SearchLocation/North_Jeolla.png" alt="전라북도" />
        <S.LocationImage
          src="/src/assets/images/SearchLocation/South_Gyeongsang.png"
          alt="경상남도"
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default ModalSearchByLocation
