import styled from '@emotion/styled'

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  height: 28px;
  padding: 0px 8px;
  box-shadow: var(--box-shadow);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    margin-left: 5px;
  }
`
