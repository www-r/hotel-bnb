import styled from '@emotion/styled'

export const Main = styled.main`
  padding: 20px 40px;
`

export const Container = styled.section`
  min-width: 760px;
  margin: 0 auto;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
