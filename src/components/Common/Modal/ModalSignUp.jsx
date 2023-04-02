import React, { useState } from 'react'
import * as S from './ModalSignUp.style'
import { IconExit } from '../../../assets/images'
import { CreateUser, AddUserData } from '../../../firebase'

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
  }

  const handleClick = (e) => {
    const pTag = e.target.parentElement.parentElement
    if (pTag.childNodes.length > 1) {
      pTag.childNodes[1].focus()
    }
  }

  const signUp = async (e) => {
    e.preventDefault()
    let user
    await CreateUser(values.EMAIL, values.PW)
      .then((result) => {
        user = result
        showModalFunc(false)
      })
      .catch((err) => {
        alert(err)
      })
    await AddUserData(user.uid, values.EMAIL, values.NAME, values.PHONENUMBER)
    set(false)
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
                </S.ParagraphDiv>
                <S.InputIDPW name="EMAIL" defaultValue={values.EMAIL} autoComplete="on" />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호</p>
                </S.ParagraphDiv>
                <S.InputIDPW
                  type={'password'}
                  name="PW"
                  defaultValue={values.PW}
                  autoComplete="on"
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>비밀번호 확인</p>
                </S.ParagraphDiv>
                <S.InputIDPW
                  type={'password'}
                  name="CONFIRMPW"
                  defaultValue={values.CONFIRMPW}
                  autoComplete="on"
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.ParagraphDiv>
                  <p>이름</p>
                </S.ParagraphDiv>
                <S.InputIDPW name="NAME" defaultValue={values.NAME} autoComplete="on" />
              </S.InputContainer>
              <S.InputContainer lower={true}>
                <S.ParagraphDiv>
                  <p>전화번호</p>
                </S.ParagraphDiv>
                <S.InputIDPW
                  name="PHONENUMBER"
                  defaultValue={values.PHONENUMBER}
                  autoComplete="on"
                />
              </S.InputContainer>
              <S.SpanLoginConfirm></S.SpanLoginConfirm>
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
