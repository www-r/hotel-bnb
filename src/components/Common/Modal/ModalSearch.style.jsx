import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const SearchContainer = styled.div`
  display: ${({ show }) => (show ? 'fixed' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`

const boxShow = keyframes`
  0% {
    height: 80px;
 
  }
  100% {
    height: 160px;
  }
`
export const SearchWrapper = styled.div`
  width: 100%;
  height: 160px;
  background-color: #fff;
  animation: ${boxShow} 0.2s linear normal;

  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Paragraph = styled.span`
  font-size: 18px;
  height: 60px;
  text-align: center;
  padding-top: 25px;
  box-sizing: border-box;
  border-bottom: 3px solid;
`
const contentShow = keyframes`
  0% {
    opacity: 0;
 
  }
  100% {
    opacity: 1;
  }
`
export const ContentWrapper = styled.div`
  display: ${({ show }) => (show ? 'grid' : 'none')};
  margin-top: 10px;
  width: 800px;
  /* height: 66px; */
  border: 1px solid #ddd;
  border-radius: 50px;
  grid-template-columns: 1.5fr 1px 1fr 1px 1fr;
  opacity: 0;
  animation: ${contentShow} 0.2s 0.2s linear normal forwards;
  position: relative;
`

export const Content = styled.div`
  position: relative;
  height: 100%;
  border-radius: 50px;
  padding: 14px 24px;
  /* background-color: ${({ isFocused }) => (isFocused ? '#fff' : '#ebebeb')}; */
  &:hover {
    background-color: #ebebeb;
  }
  cursor: pointer;
`

export const NoticeSpan = styled.span`
  font-size: 14px;
  color: #717171;
  margin-left: 3px;
`
export const Line = styled.span`
  width: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ddd;
`
export const SearchIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  transform: translate(0, 25%);
  width: 48px;
  height: 48px;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`
