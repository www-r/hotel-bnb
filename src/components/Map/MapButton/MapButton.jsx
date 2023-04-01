import React from 'react'
import { BsFillMapFill } from 'react-icons/bs'
import * as S from '@/components/Map/MapButton/MapButton.style'
import { useNavigate } from 'react-router-dom'

const MapButton = ({ movePage }) => {
  const navigate = useNavigate()

  const handleNavigateToMap = () => {
    navigate(movePage)
  }

  return (
    <>
      <S.Button onClick={handleNavigateToMap}>
        <span>지도 표시하기 </span>
        <BsFillMapFill />
      </S.Button>
    </>
  )
}

export default MapButton
