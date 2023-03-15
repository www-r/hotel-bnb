import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/mainPage/mainpage'
import ProductDetailPage from '../pages/productDetailPage/productDetailPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default Router
