import React, { useRef, useState } from 'react'
import { GoogleFavicon, IconExit } from '@/assets/images'
import * as S from './Login.style'
import { AddUserData, loginEmail, loginGoogle } from '../../firebase'
import useToastMessage from '../../hooks/useToastMessage'

const ModalLogin = (props) => {
  const { open, closeFunc, openSignUp, showModalFunc } = props
  const [values, setValues] = useState({ ID: '', PW: '' })
  const spanConfirm = useRef()

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const login = (e) => {
    e.preventDefault()
    loginEmail(values.ID, values.PW)
      .then((result) => {
        closeFunc(false)
        showModalFunc(false)
        setValues({ ID: '', PW: '' })
        useToastMessage('환영합니다')
      })
      .catch(() => {
        spanConfirm.current.innerText = '아이디 혹은 비밀번호를 확인해주세요'
      })
  }

  const googleLogin = () => {
    loginGoogle()
      .then((result) => {
        const user = result.user
        AddUserData(user.uid, user.email, user.displayName, user.phoneNumber, user.photoURL)
        closeFunc(false)
        showModalFunc(false)
        useToastMessage(`${user.displayName}님 환영합니다.`)
      })
      .catch(() => {
        spanConfirm.current.innerText = '아이디 혹은 비밀번호를 확인해주세요'
      })
  }

  return (
    <S.Container open={open}>
      <S.LoginContainer>
        <S.TitleContainer height={70}>
          <S.BtnCloseModal
            top={25}
            left={20}
            onClick={() => {
              closeFunc(false)
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
          <S.LoginForm onSubmit={login}>
            <S.InputContainer upper={true}>
              <S.ParagraphDiv>
                <p>아이디</p>
              </S.ParagraphDiv>
              <S.InputIDPW name="ID" value={values.ID} onChange={handleChange} />
            </S.InputContainer>
            <S.InputContainer upper={false}>
              <S.ParagraphDiv>
                <p>비밀번호</p>
              </S.ParagraphDiv>
              <S.InputIDPW
                type={'password'}
                name="PW"
                value={values.PW}
                onChange={handleChange}
                autoComplete="on"
              />
            </S.InputContainer>
            <S.ConfirmContainer>
              <S.SpanLoginConfirm ref={spanConfirm}></S.SpanLoginConfirm>
            </S.ConfirmContainer>
            <S.UnderLine></S.UnderLine>
            <S.TextContainer>
              <S.BtnSubmit type="submit">로그인</S.BtnSubmit>
            </S.TextContainer>
            <S.TextContainer>
              <S.BtnSignUp
                type="button"
                onClick={() => {
                  // TODO: 유효성검사 추가
                  closeFunc(false)
                  openSignUp(true)
                }}
              >
                회원가입
              </S.BtnSignUp>
            </S.TextContainer>
          </S.LoginForm>
          <S.TextContainer>
            <S.ImageContainer>
              <GoogleFavicon />
            </S.ImageContainer>
            <S.BtnGoogleLogin onClick={googleLogin}>구글로 로그인하기</S.BtnGoogleLogin>
          </S.TextContainer>
        </S.ContentContainer>
      </S.LoginContainer>
    </S.Container>
  )
}

export default ModalLogin
