import styled from '@emotion/styled'

export const Body = styled.div`
  min-width: 743px;
`
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 80px;
  margin: auto;
`
export const DivisionLineRow = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--color-light-grey);
`
export const DivisionLineCol = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--color-light-grey);
`
export const Button = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 8px;
  span {
    padding-left: 5px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
  }
  &:hover {
    background-color: var(--color-footer-grey);
  }
`

export const UnderlinedButton = styled.button`
  text-decoration: underline;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: var(--font-semi-bold);
`
