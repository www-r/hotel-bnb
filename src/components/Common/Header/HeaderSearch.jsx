import React from 'react'
import * as S from './HeaderSearch.style'
import { IconHeaderSearch } from '../../../assets/images'

const HeaderSearch = ({ click }) => {
  return (
    <S.Container onClick={() => click(true)}>
      <S.Wrapper>어디든지</S.Wrapper>
      <S.Line></S.Line>

      <S.Wrapper>언제든 일주일</S.Wrapper>
      <S.ImageContainer>
        <IconHeaderSearch />
      </S.ImageContainer>
    </S.Container>
  )
}

export default HeaderSearch
