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
  gap: 20px;
`

export const InputUserInfo = styled.input`
  font-size: 20px;
  width: 100%;
`
