import styled from '@emotion/styled'
export { DivisionLineRow } from '@/styles/common.style'
export const Item = styled.div`
  border: var(--border);
  border-radius: var(--border-container-radius);
  margin: 0 0 24px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 600px;
  height: 150px;
  position: relative;
  .thumbnail {
    background-color: red;
  }
  .info-wrapper {
    margin: 10px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-weight: var(--font-semi-bold);
      font-size: 20px;
      margin-bottom: 5px;
    }
    .reservation--info {
      display: flex;
      justify-content: space-between;
    }
    .room--rate {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const PriceModal = styled.div`
  position: absolute;
  right: -100px;
  bottom: 0;
  width: 100px;
  height: 60px;
  padding: 20px;
`
