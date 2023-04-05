import React from 'react'
import { BsFillMapFill } from 'react-icons/bs'
import { List } from '@/assets/images'
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
        {movePage === '/map' ? (
          <S.ButtonContent>
            <span>지도 표시하기 </span>
            <BsFillMapFill />
          </S.ButtonContent>
        ) : (
          <S.ButtonContent>
            <span>목록 보기 </span>
            <List />
          </S.ButtonContent>
        )}
      </S.Button>
    </>
  )
}

export default MapButton
