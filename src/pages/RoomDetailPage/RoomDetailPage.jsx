import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer'
const RoomDetailPage = () => {
  const location = useLocation()

  const room = location.state
  const navigate = useNavigate()

  const handleNavigateToPayMentPage = () => {
    navigate(`/book/${room.id}`, {
      state: room,
    })
  }

  return (
    <>
      <Header />
      <div className="inner"></div>
      <button onClick={handleNavigateToPayMentPage}>예악하기</button>
      <Footer />
    </>
  )
}

export default RoomDetailPage
