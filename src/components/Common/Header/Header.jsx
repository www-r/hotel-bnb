/** @jsxImportSource @emotion/react */
import React from 'react'
import { Container } from './Header.style'
import HeaderMenu from './HeaderMenu'
import HeaderMenuModal from './HeaderMenuModal'

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Container>
        <div>로고</div>
        <HeaderMenu />
      </Container>
    </header>
  )
}

export default Header
