import styled from '@emotion/styled'
export { DivisionLineRow } from '@/styles/common.style'
export const ModalMenu = styled.div`
  position: fixed;
  top: 70px;
  right: 30px;
  width: 240px;
  border-radius: var(--border-container-radius);
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;
  z-index: 100;
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
`

export const ContentItem = styled.li`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  font-weight: var(--font-semi-bold);
`
