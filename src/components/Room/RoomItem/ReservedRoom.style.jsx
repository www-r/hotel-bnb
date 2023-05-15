import styled from '@emotion/styled'

export const Item = styled.div`
  margin: 24px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 600px;
  height: 150px;
  .thumbnail {
    background-color: red;
  }
  .reservation-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    h2 {
      font-weight: var(--font-semi-bold);
      font-size: 20px;
      margin-bottom: ;
    }
  }
`
