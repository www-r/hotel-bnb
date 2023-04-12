import React, { useContext } from 'react'
import * as S from './TagItem.style'
import { useNavigate } from 'react-router-dom'
import { RoomsContext } from '@/contexts/RoomsProvider'

const HeaderTagItem = ({ text, img }) => {
  const { rooms } = useContext(RoomsContext)

  const navigate = useNavigate()
  const handleClick = () => {
    const res = rooms.filter((room) => room.tags.includes(text.replace(/ /g, '')))
    navigate(`/search/${text}`, {
      state: { res },
    })
  }
  return (
    <S.Container onClick={handleClick}>
      <S.ImageContainer src={img} />
      <S.SpanContent>{text}</S.SpanContent>
    </S.Container>
  )
}

export default HeaderTagItem
