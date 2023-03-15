import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MapPage from '@/pages/MapPage/MapPage'
import ProductDetailPage from '@/pages/RoomDetailPage/RoomDetailPage'
import MainPage from '@/pages/MainPage/Mainpage'
import ReservationDetailPage from '@/pages/ReservationDetailPage/ReservationDetailPage'
import WishListPage from '@/pages/WishListpage/WishListpage'
import PersonalInfoPage from '@/pages/PersonalInfoPage/PersonalInfoPage'
import AccountPage from '@/pages/AccountPage/AccountPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/room/:id" element={<ProductDetailPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/book/:id" element={<ReservationDetailPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/personalInfo" element={<PersonalInfoPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/notfound" element={<ErrorPage />} />
    </Routes>
  )
}

export default Router
