import styled from '@emotion/styled'

export const DivisionLine = styled.div`
  height: 1.5px;
  width: 100%;
  background-color: #ddd;
  margin: 8px 0;
`
export const Footer = styled.footer`
  border-top: 1px solid #ddd;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
`
export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 48px 0;
  border-bottom: 1px solid #ddd;
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
  padding: 24px 0;
  border-bottom: 1px solid #ddd;
`
export const FooterBtmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterInfo = styled.span`
  margin: 16px 10px 0 0;
  font-size: 14px;
`
// .footerCopyrightText::before {
//   display: block;
//   content: '';
//   height: 1.5px;
//   background-color: #dddddd;
//   margin: 8px 0 8px;
// }
export const FooterCopyrightText = styled.div`
  font-size: 10px;
  padding-bottom: 8px;
  color: #717171;
`
