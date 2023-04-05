import styled from '@emotion/styled'

export const Button = styled.button`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;

  background-color: #222;
  border-radius: 26px;
  width: 160px;
  height: 50px;
  color: #fff;
  font-weight: 600;
`
export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-left: 5px;
  }
`
