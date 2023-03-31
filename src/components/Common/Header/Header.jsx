import { getAuth } from 'firebase/auth'
import React from 'react'
import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer
          onClick={() => {
            const auth = getAuth()
            console.log(auth.currentUser)
          }}
        >
          로고
        </S.LogoContainer>
        <HeaderMenu />
      </S.Container>
    </S.Header>
  )
}

export default Header
