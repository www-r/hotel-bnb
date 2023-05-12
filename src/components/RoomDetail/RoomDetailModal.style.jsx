import styled from 'styled-components'
export { DivisionLineRow } from '@/styles/common.style'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
`
export const RoomDetailModal = styled.div`
  margin: auto;
  width: 780px;
  height: 686px;

  background-color: #fff;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-container-radius);
  border: var(--border);
`
export const ModalHeader = styled.div`
  button {
    width: 32px;
    height: 32px;
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
  padding: 40px 24px 24px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 26px;
    font-weight: var(--font-bold);
  }
  .title-desc {
    margin-bottom: 32px;
  }
  h4 {
    padding: 16px 0;
    font-size: 18px;
    font-weight: var(--font-semi-bold);
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      padding: 24px 0;
      display: flex;
      flex-direction: column;
    }
  }
`
