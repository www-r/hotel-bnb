import React, { useContext, useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UsersContext } from '../../../contexts/UsersProvider'

const Header = () => {
  const user = useContext(UsersContext)
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
