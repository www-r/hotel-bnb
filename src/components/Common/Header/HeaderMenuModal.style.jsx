import styled from '@emotion/styled'

export const ModalMenu = styled.div`
  position: fixed;
  top: 70px;
  right: 50px;
  width: 240px;
  // border: 1px solid black;
  border-radius: 10px;
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
  box-shadow: 0 0 10px #ddd;
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const ContentItem = styled.li`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  font-weight: bold;
`
