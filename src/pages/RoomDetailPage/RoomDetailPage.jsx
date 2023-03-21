import React from 'react'
import { useLocation } from 'react-router-dom'

const RoomDetailPage = () => {
  const location = useLocation()

  console.log(location.state)

  return <div>RoomDetailPage</div>
}

export default RoomDetailPage
