import React, { createContext, useEffect, useState } from 'react'

const RoomsContext = createContext(null)

const RoomsProvider = ({ children }) => {
  const [romms, setRooms] = useState([])

  const roomsContext = []

  // useEffect(() => , [])

  return <RoomsContext.Provider value={roomsContext}>{children}</RoomsContext.Provider>
}

export default RoomsProvider
