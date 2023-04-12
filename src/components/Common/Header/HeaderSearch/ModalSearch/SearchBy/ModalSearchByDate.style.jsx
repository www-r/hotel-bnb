import styled from '@emotion/styled'

export const Container = styled.div`
  display: ${({ show }) => (show === 'Date' ? 'block' : 'none')};
  position: absolute;
  top: 85px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 20px;
  width: 800px;
  height: 450px;
`

export const TitleContainer = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`
