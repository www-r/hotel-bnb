import React from 'react'
import * as S from './HeaderTagItem.style'

const HeaderTagItem = ({ text, img }) => {
  return (
    <S.Container>
      <S.ImageContainer src={img} />
      <S.SpanContent>{text}</S.SpanContent>
    </S.Container>
  )
}

export default HeaderTagItem
