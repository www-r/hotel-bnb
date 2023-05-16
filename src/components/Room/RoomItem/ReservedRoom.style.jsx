import styled from '@emotion/styled'
import { Image } from '@/styles/common.style'
export { DivisionLineRow, DivisionLineCol } from '@/styles/common.style'
export const Item = styled.div`
  border: var(--border);
  border-radius: var(--border-container-radius);
  margin: 0 0 24px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-width: 600px;
  height: 165px;
  position: relative;
`
export const Thumbnail = styled(Image)`
  border-bottom-left-radius: var(--border-container-radius);
  border-top-left-radius: var(--border-container-radius);
  height: 165px;
  width: 165px;
  background-size: cover;
`
export const InfoWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  .reservation--id {
    /* border-bottom: var(--border); */
    padding: 0 0 0 5px;
  }
  .reservation--info {
  }
  .reservation--period {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .room--rate {
    display: flex;
    justify-content: space-between;
  }
`
export const InfoItemBold = styled.span`
  font-weight: var(--font-semi-bold);
`
export const PriceModal = styled.div`
  position: absolute;
  right: -100px;
  bottom: 0;
  width: 100px;
  height: 60px;
  padding: 20px;
`
