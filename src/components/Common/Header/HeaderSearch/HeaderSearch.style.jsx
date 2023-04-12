import styled from '@emotion/styled'

export const Container = styled.div`
  width: 360px;
  height: 50px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1px 1fr 30px;
  place-content: center;

  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 10px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
`

export const Wrapper = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`

export const Line = styled.span`
  width: 1px;
  height: 32px;
  background-color: #ddd;
`

export const ImageContainer = styled(Wrapper)`
  width: 32px;
  height: 32px;
  background-color: var(--color-main);
  border-radius: 25px;
`
