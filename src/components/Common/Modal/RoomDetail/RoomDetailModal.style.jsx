import styled from 'styled-components'
import { DivisionLineRow } from '@/styles/common.style'
export { DivisionLineRow } from '@/styles/common.style'
export const DivisionLine = styled(DivisionLineRow)`
  height: 5px;
  margin: 10px 0 20px;
`
export const RoomDetailModal = styled.div`
  margin: auto;
  padding: 24px 24px 40px;
  width: 600px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
  bottom: calc(50vh - 210px);
  left: calc(50vw - 300px);
  background-color: #fff;
  box-shadow: var(--modal-shadow);
  border-radius: var(--border-container-radius);
  border: var(--border);
`
export const ModalHeader = styled.div`
  /* padding: 24px 0; */
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--color-light-grey);
    }
  }
`

export const ModalMain = styled.div`
  overflow: auto;
  /* padding: 40px 24px 24px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 26px;
    font-weight: var(--font-bold);
    margin: 0 0 20px;
  }
  .title-desc {
    padding-bottom: 24px;
  }
  h4 {
    padding: 24px 0;
    font-size: 18px;
    font-weight: var(--font-semi-bold);
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      padding: 0 0 24px;
      display: flex;
      flex-direction: column;
    }
  }
`
