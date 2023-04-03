import React, { useState } from 'react'
import * as S from './ModalSignUp.style'
import { IconExit } from '../../../assets/images'
import { CreateUser, AddUserData } from '../../../firebase'

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/
const RegexPhoneNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

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
    const spanId = `span_${e.target.name}`
    const spanEl = document.querySelector(`#${spanId}`)

    switch (spanId) {
      case 'span_EMAIL':
        spanEl.style.display = RegexID.test(e.target.value) ? 'none' : 'block'
        break
      case 'span_PW':
        spanEl.style.display = RegexPW.test(e.target.value) ? 'none' : 'block'
        break
      case 'span_CONFIRMPW':
        spanEl.style.display = values.PW === e.target.value ? 'none' : 'block'
        break
      case 'span_NAME':
        spanEl.style.display = e.target.value.length >= 3 ? 'none' : 'block'
        break
      case 'span_PHONENUMBER':
        spanEl.style.display = RegexPhoneNumber.test(e.target.value) ? 'none' : 'block'
        break
    }
  }

  const signUp = async (e) => {
    e.preventDefault()
    const formEl = document.querySelector('#SignupForm')
    const spanEls = formEl.querySelectorAll('span')
    const bSignup = Array.from(spanEls).some((el) => el.style.display === 'block')
    if (bSignup === true) {
      alert('양식 불일치')
      return
    }

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
    console.log('완료')
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
            <S.SignUpForm id="SignupForm" onSubmit={signUp} onChange={handleChange}>
              <S.InputContainer upper={true}>
                <S.ParagraphDiv>
                  <p>아이디</p>
                  <S.SpanSignupConfirm id="span_EMAIL">
                    이메일 양식에 맞춰주세요
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW name="EMAIL" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호</p>
                  <S.SpanSignupConfirm id="span_PW">비밀번호 양식에 맞춰주세요</S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="PW" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호 확인</p>
                  <S.SpanSignupConfirm id="span_CONFIRMPW">
                    비밀번호가 일치하지 않습니다
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'password'} name="CONFIRMPW" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>이름</p>
                  <S.SpanSignupConfirm id="span_NAME">3글자 이상 입력해주세요</S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW name="NAME" autoComplete="off" />
              </S.InputContainer>
              <S.InputContainer lower={true}>
                <S.ParagraphDiv>
                  <p>전화번호</p>
                  <S.SpanSignupConfirm id="span_PHONENUMBER">
                    전화번호 형식에 맞춰 입력해주세요
                  </S.SpanSignupConfirm>
                </S.ParagraphDiv>
                <S.InputIDPW type={'number'} name="PHONENUMBER" autoComplete="off" />
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
