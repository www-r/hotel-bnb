import React, { useEffect, useState } from 'react'
import { GoogleFavicon, IconExit } from '../../../assets/images'
import * as S from './ModalLogin.style'
import { app, loginEmail, loginGoogle } from '../../../firebase'
import { getAuth } from 'firebase/auth'

const ModalLogin = (props) => {
  const { open, closeFunc, openSignUp } = props
  const [values, setValues] = useState({ ID: '', PW: '' })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const login = (e) => {
    e.preventDefault()
    loginEmail(values.ID, values.PW).then((result) => {
      console.log(result)
      // const user = result.user
    })
  }

  const googleLogin = () => {
    loginGoogle().then((result) => {
      console.log(result)
      // const user = result.user
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
              <S.InputIDPW type={'password'} name="PW" value={values.PW} onChange={handleChange} />
            </S.InputContainer>
            <S.SpanLoginConfirm></S.SpanLoginConfirm>
            <S.TextContainer>
              <S.BtnSubmit type="submit">로그인</S.BtnSubmit>
            </S.TextContainer>
            <S.TextContainer>
              <S.BtnSignUp
                type="button"
                onClick={() => {
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
