import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const LoginContainer = styled.div`
  width: 568px;
  height: 682px;

  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 0 auto;
  background-color: #fff;
  border-radius: 15px;
`

export const Division = styled.div`
  position: relative;
  height: ${(props) => props.height}px;
  border-bottom: 1px solid #ebebeb;
`

export const AbsoluteButton = styled.button`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  background-color: inherit;
  cursor: pointer;
`
