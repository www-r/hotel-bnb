import React, { useState } from 'react'
import * as S from './ModalSignUp.style'
import { IconExit } from '../../../assets/images'
import { CreateUser, AddUserData } from '../../../firebase'

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/

const ModalSignUp = (props) => {
  const { open, set, showModalFunc } = props
  const [values, setValues] = useState({
    EMAIL: '',
    PW: '',
    CONFIRMPW: '',
    NAME: '',
    PHONENUMBER: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    switch (e.target.name) {
      case 'EMAIL':
    }
  }

  const handleClick = (e) => {
    const pTag = e.target.parentElement.parentElement
    if (pTag.childNodes.length > 1) {
      pTag.childNodes[1].focus()
    }
  }

  const signUp = async (e) => {
    e.preventDefault()
    await CreateUser(values.EMAIL, values.PW)
      .then(async (result) => {
        await AddUserData(result.uid, values.EMAIL, values.NAME, values.PHONENUMBER)
        showModalFunc(false)
        set(false)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        const inputEl = e.target.querySelectorAll('input')
        Array.from(inputEl).forEach((el) => (el.value = ''))
      })
  }

  return (
    <S.Conatiner open={open}>
      <S.SignUpContainer>
        <S.TitleContainer height={70}>
          <S.BtnCloseModal
            onClick={() => {
              set(false)
            }}
          >
            <IconExit />
          </S.BtnCloseModal>
          <h2>회원 가입</h2>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.TextContainer>
            <S.SignUpForm onSubmit={signUp} onChange={handleChange} onClick={handleClick}>
              <S.InputContainer upper={true}>
                <S.ParagraphDiv>
                  <p>아이디</p>
                  <S.SpanSignupConfirm className="confirmEmail">
                    이메일 양식에 맞춰주세요
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW name="EMAIL" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호</p>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="PW" autoComplete="off" />
                <S.SpanSignupConfirm></S.SpanSignupConfirm>
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호 확인</p>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="CONFIRMPW" autoComplete="off" />
                <S.SpanSignupConfirm></S.SpanSignupConfirm>
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>이름</p>
                </S.ParagraphDiv>
                <S.InputIDPW name="NAME" autoComplete="off" />
                <S.SpanSignupConfirm></S.SpanSignupConfirm>
              </S.InputContainer>
              <S.InputContainer lower={true}>
                <S.ParagraphDiv>
                  <p>전화번호</p>
                </S.ParagraphDiv>
                <S.InputIDPW type={'number'} name="PHONENUMBER" autoComplete="off" />
                <S.SpanSignupConfirm></S.SpanSignupConfirm>
              </S.InputContainer>
              <S.TextContainer>
                <S.BtnSubmit type="submit">회원가입</S.BtnSubmit>
              </S.TextContainer>
            </S.SignUpForm>
          </S.TextContainer>
        </S.ContentContainer>
      </S.SignUpContainer>
    </S.Conatiner>
  )
}

export default ModalSignUp
