import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer'
const RoomDetailPage = () => {
  const location = useLocation()

  console.log(location.state)

  return (
    <>
      <Header />
      <div className="inner"></div>
      <Footer />
    </>
  )
}

export default RoomDetailPage
