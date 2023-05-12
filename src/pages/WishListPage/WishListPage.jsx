import React, { useEffect, useContext } from 'react'
//components
import RoomList from '@/components/Room/RoomList/RoomList'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer/Footer'
import * as S from '@/pages/WishlistPage/WishlistPage.style'

const WishlistPage = () => {
  return (
    <>
      <Header />
      <S.Inner>
        <S.PageTitleTitle>위시리스트</S.PageTitleTitle>
        <S.WishlistContainer>
          
        </S.WishlistContainer>
      </S.Inner>
      <Footer />
    </>
  )
}

export default WishlistPage
