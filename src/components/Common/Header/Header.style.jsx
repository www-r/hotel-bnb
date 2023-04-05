import styled from '@emotion/styled'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background-color: #fff;
`

export const Container = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-left: 100px;
  padding-right: 100px;
`

export const LogoContainer = styled.div`
  position: absolute;
  left: 30px;
`

export const TagItemsContatiner = styled(Container)`
  padding: 10px;
`
