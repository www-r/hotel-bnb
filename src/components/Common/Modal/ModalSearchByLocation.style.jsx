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

export const TitleContainer = styled.div`
  margin-left: 35px;
  margin-bottom: 10px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
`

export const LocationImage = styled.img`
  width: 180px;
  height: 225px;
  margin: 0 auto;
  cursor: pointer;
`
