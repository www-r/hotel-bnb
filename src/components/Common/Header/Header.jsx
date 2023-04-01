import React, { useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { getCurrentUser } from '../../../firebase'

const Header = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    getCurrentUser(setUser)
  }, [user])
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer
          onClick={() => {
            console.log(user)
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
