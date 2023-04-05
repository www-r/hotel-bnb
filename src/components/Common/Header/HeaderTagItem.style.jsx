import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 70px;
  height: 100%;
  padding-top: 15px;
  color: #717171;
  opacity: 0.7;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 1;
    border-bottom: 2px solid #ddd;
  }
  cursor: pointer;
`

export const ImageContainer = styled.img`
  width: 24px;
  height: 24px;
`

export const SpanContent = styled.span`
  font-size: 12px;
  font-weight: bold;
`
