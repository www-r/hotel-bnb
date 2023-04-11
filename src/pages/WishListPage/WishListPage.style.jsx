import styled from '@emotion/styled'

export const DivisionLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 32px 0;
`
export const Container = styled.div`
  display: grid;
  place-content: center;
  margin: 48px 75px;
  padding: 20px 24px;
`
export const PageTitleTitle = styled.h2`
  font-weight: 800;
  font-size: 32px;
  margin: 20px 0;
`
export const MainContainer = styled.div``
export const Main = styled.main`
  padding: 0 8px;
`
export const wishListContainer = styled.ul`
  display: flex;
`
export const WishlistItem = styled.li`
  display: grid;
  gap: 40px;
  min-height: 90px;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
`
export const HotelImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  &:nth-child(1) {
    grid-row: span 2;
  }
  border: 1px solid #ddd;
  border-radius: 12px;
`
export const HotelImage = styled.img`
  object-fit: cover;
`
export const HotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    font-size: 22px;
    font-weight: 600;
  }
  &:nth-child(2) {
    font-size: 12px;
    color: #717171;
  }
`
export const Btn = styled.button`
  outline: none;
  padding: 13px 23px;
  border-radius: 12px;
`
