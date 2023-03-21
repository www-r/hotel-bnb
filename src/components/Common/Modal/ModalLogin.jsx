import React, { useState } from 'react'
import { IconExit } from '../../../assets/images'
import * as S from './ModalLogin.style'

const ModalLogin = (props) => {
  const { open, set } = props
  return (
    <S.Container open={open}>
      <S.LoginContainer>
        <S.TitleContainer height={70}>
          <S.BtnCloseModal
            top={25}
            left={20}
            onClick={() => {
              set(false)
            }}
          >
            <IconExit />
          </S.BtnCloseModal>
          <h2>로그인 또는 회원 가입</h2>
        </S.TitleContainer>
        <S.ContentContainer height={612}>
          <S.TextContainer>
            <h1>호텔비엔비에 오신 것을 환영합니다.</h1>
          </S.TextContainer>
          <S.LoginForm>
            <S.InputContainer upper={true}>
              <div>
                <p>ID</p>
              </div>
              <S.InputIDPW />
            </S.InputContainer>
            <S.InputContainer upper={false}>
              <S.InputIDPW />
            </S.InputContainer>
          </S.LoginForm>
        </S.ContentContainer>
      </S.LoginContainer>
    </S.Container>
  )
}

export default ModalLogin
