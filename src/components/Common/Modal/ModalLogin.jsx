import React from 'react'
import { IconExit } from '../../../assets/images'
import { AbsoluteButton, Container, Division, LoginContainer } from './ModalLogin.style'

const ModalLogin = (props) => {
  const { open } = props
  return (
    <Container open={open}>
      <LoginContainer>
        <Division height={70}>
          <AbsoluteButton top={25} left={20}>
            <IconExit></IconExit>
          </AbsoluteButton>
        </Division>
      </LoginContainer>
    </Container>
  )
}

export default ModalLogin
