import styled from '@emotion/styled'

export const Conatiner = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
export const SignUpContainer = styled.div`
  width: 468px;
  height: 682px;

  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 0 auto;
  background-color: #fff;
  border-radius: 15px;
`

export const TitleContainer = styled.div`
  position: relative;
  height: ${(props) => props.height}px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 25px;
  left: 20px;
  background-color: inherit;
  cursor: pointer;
  border: none;
`

export const ContentContainer = styled.div`
  height: ${(props) => props.height}px;
  padding: 24px;
`

export const TextContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 22px;
  position: relative;
`

export const SignUpForm = styled.form``

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const InputUserInfo = styled.input`
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
`

export const SubmitButton = styled.button`
  border: 1px solid;
  width: 100%;
  border-radius: 8px;
  padding: 14px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #800080;
`
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  ${(props) => (props.upper ? '' : `border-top: none;`)}
  border-radius: ${(props) => (props.upper ? '8px 8px 0 0;' : props.lower ? '0 0 8px 8px;' : '')};
  &:focus-within {
    border: 2px solid;
  }
`

export const ParagraphDiv = styled.div`
  position: absolute;
  top: 2px;
  left: 12px;
  right: 12px;
  padding: 0 24px 0 0;
  font-weight: bold;
  font-size: 16px;
  display: flex;
`

export const InputIDPW = styled.input`
  font-size: 20px;
  padding: 36px 32px 12px 16px;
  border-radius: 8px;
  border: none;
  z-index: 100;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const SpanSignupConfirm = styled.span`
  font-size: 14px;
  margin: auto 10px;
  color: #ff0000;
  font-weight: bold;
  display: none;
`

export const BtnSubmit = styled.button`
  background-color: #800080;
  border: 1px solid;
  width: 100%;
  border-radius: 8px;
  padding: 14px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`
