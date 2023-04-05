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

  & svg {
    margin-left: 5px;
  }

  /* transform: scale(1);
  transform-origin: 50% 50%;
  transition: background-color var(--bd-d-m-c-q) 300ms,
    transform 300ms cubic-bezier(0, 0, 0.1, 1) 0s, box-shadow 300ms cubic-bezier(0, 0, 0.1, 1) 0s; */
`
