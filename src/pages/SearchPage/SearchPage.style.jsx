import styled from '@emotion/styled'

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`

export const RoomListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  height: 100vh;
  min-width: 743px;
  margin: 0 auto;
  width: 50vw;

  /* min-width: 743px;
  margin: 0 auto;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 50vw;
  padding: 20px 40px; */
`
export const MapListWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 50vw;
  height: 100vh;
`
