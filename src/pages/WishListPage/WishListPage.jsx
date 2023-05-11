import React, { useEffect, useContext } from 'react'
import { getData } from '@/firebase.js'
import { UserContext } from '@/contexts/UserProvider'
//components
import RoomList from '@/components/Room/RoomList/RoomList'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import Footer from '@/components/Common/Footer/Footer'
//styles
import * as S from './WishlistPage.style'

const WishlistPage = () => {
  // useEffect(() => {
  //   const wishRoomsData = getData()
  //   console.log(wishRoomsData)

  // }, [])
  const userCtx = useContext(UserContext)
  const wishlist = userCtx.wishLists // []
  // console.log(wishlist)

  return (
    <>
      <S.Container>
        <S.PageTitleTitle>위시리스트</S.PageTitleTitle>
        <S.MainContainer>
          <S.Main>
            <S.wishListContainer>
              <S.WishlistItem>
                <S.HotelImagesContainer div className="HotelImagesContainer">
                  <S.HotelImage src="../../../../images/room1" alt="hotel image1" />
                  <S.HotelImage src="#" alt="hotel image2" />
                  <S.HotelImage src="#" alt="hotel image3" />
                </S.HotelImagesContainer>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </S.WishlistItem>
              <S.WishlistItem>
                <S.HotelImagesContainer div className="HotelImagesContainer">
                  <S.HotelImage src="../../../../images/room1" alt="hotel image1" />
                  <S.HotelImage src="#" alt="hotel image2" />
                  <S.HotelImage src="#" alt="hotel image3" />
                </S.HotelImagesContainer>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </S.WishlistItem>
              <S.WishlistItem>
                <S.HotelImagesContainer div className="HotelImagesContainer">
                  <S.HotelImage src="../../../../images/room1" alt="hotel image1" />
                  <S.HotelImage src="#" alt="hotel image2" />
                  <S.HotelImage src="#" alt="hotel image3" />
                </S.HotelImagesContainer>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </S.WishlistItem>
              <S.WishlistItem>
                <S.HotelImagesContainer div className="HotelImagesContainer">
                  <S.HotelImage src="../../../../images/room1" alt="hotel image1" />
                  <S.HotelImage src="#" alt="hotel image2" />
                  <S.HotelImage src="#" alt="hotel image3" />
                </S.HotelImagesContainer>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </S.WishlistItem>
            </S.wishListContainer>

            <RoomList rooms={wishlist} />
            <S.Btn>더 보기</S.Btn>
          </S.Main>
        </S.MainContainer>
      </S.Container>
      <Footer />
    </>
  )
}

export default WishlistPage
