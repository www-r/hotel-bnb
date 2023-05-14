import styled from '@emotion/styled'
import {
  ListItem as listItem,
  Aside as aside,
  AsideItem as asideItem,
} from '../../styles/common.style'
export { DivisionLineRow } from '@/styles/common.style'
export {
  Container,
  PageTitle,
  PageTitleTitle,
  MainContainer,
  Main,
  // ListItem,
  // Aside,
  // AsideItem,
} from '@/styles/common.style'

export const menu = styled.div`
  display: flex;
`
export const ListItem = styled(listItem)`
  margin: 0 0 80px;
`
export const Lists = styled.ul`
  padding: 24px 0;
`
export const List = styled.li`
  padding: 24px 0;
  .list--content {
    display: flex;
  }
`
export const Button = styled.button`
  border: 1px solid;
  border-radius: 8px;
  margin: 24px 0 0;
  padding: 14px 24px;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: 16px;
  font-weight: var(--font-semi-bold);
`
export const Aside = styled(aside)`
  position: relative;
`

export const AsideItem = styled(asideItem)`
  position: sticky;
  top: 100px;
  right: 0;
`
