import styled from '@emotion/styled'
import { DivisionLineRow } from '../../../styles/common.style'

export const DivisionLine = styled(DivisionLineRow)`
  height: 1.5px;
  margin: 24px 0;
`
export const Footer = styled.footer`
  word-break: keep-all;
  margin-top: 48px;
  border-top: var(--border);
  padding: 0 80px;
  background-color: var(--color-footer-grey);
  display: flex;
  flex-direction: column;
  position: relative;
`
export const FooterTop = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 48px;
`
export const FooterTopItem = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterTopItemTitle = styled.h3`
  font-weight: 800;
`
export const FooterTopItemText = styled.span`
  margin: 16px 0 0;
  font-size: 14px;
`
export const FooterBtm = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`
export const FooterBtmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footerIcons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    img {
      width: 18px;
    }
  }
`
export const FooterInfo = styled.span`
  margin: 16px 10px 0 0;
  font-size: 14px;
`
export const FooterCopyrightText = styled.div`
  font-size: 14px;
  padding-bottom: 8px;
  color: #717171;
`
