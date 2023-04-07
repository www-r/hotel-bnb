import React, { useState } from 'react'
import * as S from './HeaderSearch.style'
import { IconHeaderSearch } from '../../../assets/images'
import ModalSearch from '../Modal/ModalSearch'

const HeaderSearch = () => {
  const [showModal, setShowModal] = useState('')
  return (
    <>
      <S.Container>
        <S.Wrapper onClick={() => setShowModal('Location')}>어디든지</S.Wrapper>
        <S.Line></S.Line>
        <S.Wrapper onClick={() => setShowModal('Date')}>언제든 일주일</S.Wrapper>
        <S.ImageContainer>
          <IconHeaderSearch />
        </S.ImageContainer>
      </S.Container>
      <ModalSearch state={showModal} click={setShowModal} />
    </>
  )
}

export default HeaderSearch
