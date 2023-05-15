import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100000;
  background-color: #fff;
`

export const Container = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 80px;
  min-width: 743px;
`

export const TagItemsContatiner = styled(Container)`
  overflow: hidden;
  display: block;
  gap: 0 30px;
  /* min-width: px; */
  /* min-width: 625px; */
  /* --basic-height: 80px; */

  /* @media (max-width: 1800px) {
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
  } */
`

export const SearchContainer = styled.div`
  display: ${({ show }) => (show ? 'fixed' : 'none')};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const SearchWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
`
