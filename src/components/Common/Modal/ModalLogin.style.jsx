import styled from '@emotion/styled'

export const Container = styled.div`
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

export const LoginContainer = styled.div`
  width: 568px;
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

export const ContentContainer = styled.div`
  height: ${(props) => props.height}px;
  padding: 24px;
`

export const TextContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 22px;
  position: relative;
`

export const LoginForm = styled.form``

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  ${(props) => (props.upper ? '' : `border-top: none;`)}
  border-radius: ${(props) => (props.upper ? '8px 8px 0 0;' : '0 0 8px 8px')};
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
`

export const InputIDPW = styled.input`
  font-size: 20px;
  padding: 36px 36px 20px 12px;
  border-radius: 8px;
  border: none;
  &:focus {
    outline: none;
  }
`

export const BtnCloseModal = styled.button`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  background-color: inherit;
  cursor: pointer;
  border: none;
`

export const SpanLoginConfirm = styled.span``

export const BtnSubmit = styled.button`
  background-color: purple;
  border: 1px solid;
  width: 100%;
  border-radius: 8px;
  padding: 14px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const BtnGoogleLogin = styled(BtnSubmit)`
  background-color: #fff;
  color: #000;
  font-size: 14px;
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
`
