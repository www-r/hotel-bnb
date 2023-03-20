/** @jsxImportSource @emotion/react */
import React from 'react'
import { Container } from './Header.style'
import HeaderMenu from './HeaderMenu'
import { Image } from './HeaderMenu.style'

const Header = () => {
  return (
    <Container>
      <div>로고</div>
      <HeaderMenu />
    </Container>
  )
}

export default Header
