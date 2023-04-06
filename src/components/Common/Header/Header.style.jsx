import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
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
  flex-wrap: nowrap;
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
  overflow: hidden;
  gap: 0 30px;
  min-width: 625px;
  --basic-height: 80px;

  @media (max-width: 1800px) {
    flex-wrap: wrap;
    height: calc(var(--basic-height) * 2);
  }
  @media (max-width: 1063px) {
    flex-wrap: wrap;
    height: calc(var(--basic-height) * 3);
  }
  @media (max-width: 842px) {
    flex-wrap: wrap;
    height: calc(var(--basic-height) * 4);
  }
`
