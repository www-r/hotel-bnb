import styled from '@emotion/styled'

export const Container = styled.div`
  display: ${({ show }) => (show === 'Location' ? 'block' : 'none')};
  position: absolute;
  top: 85px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 20px;
  width: 800px;
  height: 550px;
`
