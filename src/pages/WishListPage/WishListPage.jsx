import React, { useEffect } from 'react'
import { getData } from '@/firebase.js'
import Footer from '@/components/Common/Footer'
import * as S from './WishlistPage.style'

const WishlistPage = () => {
  useEffect(() => {
    const wishRoomsData = getData()
    console.log(wishRoomsData)
    // wishRoomsData.map((wishRoomDataObj)=>{
    //   wishRoomDataObj.id ===
    // })
  }, [])
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
          </S.Main>
          <S.Btn>더 보기</S.Btn>
        </S.MainContainer>
      </S.Container>
      <Footer />
    </>
  )
}

export default WishlistPage
