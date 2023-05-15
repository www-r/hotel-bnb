import styled from '@emotion/styled'
import { DivisionLineRow } from '@/styles/common.style'
export {
  Container,
  PageTitle,
  PageTitleTitle,
  MainContainer,
  Main,
  ListItem,
  Aside,
  AsideItem,
} from '@/styles/common.style'
export { DivisionLineRow } from '@/styles/common.style'

export const DivisionLine = styled(DivisionLineRow)`
  margin: 32px 0;
`

export const ListItemBtn = styled.button`
  outline: none;
  text-decoration: underline;
  font-size: 16px;
  border: none;
  background-color: transparent;
  padding: 0 5px;
`
export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`
export const InputsContainer = styled.form`
  display: flex;
  gap: 5px;
`
// export const InputWrapper = styled.div`
//   padding: 0 8px;
//   height: 56px;
//   position: relative;
// `
export const InputLabel = styled.span`
  font-weight: var(--font-semi-bold);
`
export const Input = styled.input`
  outline: none;
  padding: 26px 12px 6px;
  border: 1px solid;
  border-radius: 8px;
`
export const ContentBtn = styled.button`
  outline: none;
  padding: 13px 23px;
  border: 1px solid;
  border-radius: 8px;
`
