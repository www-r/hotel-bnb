/** @jsxImportSource @emotion/react */
import { getAuth } from 'firebase/auth'
import React from 'react'
import { app } from '../../../firebase'
import { Container } from './Header.style'
import HeaderMenu from './HeaderMenu'
import HeaderMenuModal from './HeaderMenuModal'

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: '100000',
        backgroundColor: '#fff',
      }}
    >
      <Container>
        <div
          onClick={() => {
            const auth = getAuth()
            console.log(auth.currentUser)
          }}
        >
          로고
        </div>
        <HeaderMenu />
      </Container>
    </header>
  )
}

export default Header
