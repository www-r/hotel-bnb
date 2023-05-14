import styled from '@emotion/styled'
import { Inner as inner } from '@/styles/common.style'

export const Inner = styled(inner)`
  justify-content: flex-start;
`
export const PageTitleTitle = styled.h2`
  font-weight: var(--font-semi-bold);
  font-size: 32px;
  padding: 12px 0 8px;
  margin-top: 36px;
`

export const WishlistContainer = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
export const WishlistItem = styled.li`
  display: grid;
  gap: 40px;
  min-height: 90px;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
`
// @media (min-width:744px){}

//   @media (min-width:950px){}

//   @media (min-width:1128px){}
