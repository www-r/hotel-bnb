import styled from '@emotion/styled'

const flexCenter = `
  display: flex;
  align-Items: center;
  Justify-Content: center;
`

export const MenuImage = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 25px;
`

export const MenuContainer = styled.div`
  position: absolute;
  right: 30px;
  width: 77px;
  height: 42px;
  color: #ddd;
  border: 1px solid;
  border-radius: 25px;
  ${flexCenter}
  gap: 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 5px #ccc;
  }
`
