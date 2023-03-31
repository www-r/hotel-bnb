import React, { useState } from 'react'
import * as S from './ModalSignUp.style'
import { IconExit } from '../../../assets/images'
import { CreateUser, AddUserData } from '../../../firebase'

const ModalSignUp = (props) => {
  const { open, set } = props
  const [values, setValues] = useState({ ID: '', PW: '', NAME: '', PHONENUMBER: '' })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const signUp = async (e) => {
    e.preventDefault()
    let user
    await CreateUser(values.ID, values.PW).then((result) => {
      user = result
      console.log(result)
    })
    console.log(user)
    await AddUserData(user.uid, values.NAME, values.PHONENUMBER)
    set(false)
  }

  return (
    <S.Conatiner open={open}>
      <S.SignUpContainer>
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
          <h2>회원 가입</h2>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.TextContainer>
            <S.SignUpForm onSubmit={signUp}>
              <S.InputDiv>
                아이디
                <S.InputUserInfo name="ID" value={values.ID} onChange={handleChange} />
                비밀번호
                <S.InputUserInfo type={'password'} name="PW" value={values.PW} onChange={handleChange} />
                비밀번화 확인
                <S.InputUserInfo />
                이름
                <S.InputUserInfo name="NAME" value={values.NAME} onChange={handleChange} />
                전화번호
                <S.InputUserInfo name="PHONENUMBER" value={values.PHONENUMBER} onChange={handleChange} />
              </S.InputDiv>
              <button type={'submit'}>가입하기</button>
            </S.SignUpForm>
          </S.TextContainer>
        </S.ContentContainer>
      </S.SignUpContainer>
    </S.Conatiner>
  )
}

export default ModalSignUp
