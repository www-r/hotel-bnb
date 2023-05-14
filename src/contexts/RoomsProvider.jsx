import React, { createContext, useEffect, useState } from 'react'
import useGetData from '../hooks/useGetData'

export const RoomsContext = createContext({
  amenities: [],
  description: null,
  geoLocation: {
    lat: 0,
    lng: 0,
  },
  id: null,
  location: null,
  price: 0,
  // rating: 0,
  // reservation: {
  //   end: 0,
  //   start: 0,
  // },
  reservedDays: [],
  thumbnail: null,
  title: null,
})

const RoomsProvider = ({ children }) => {
  const { data: rooms, loading, error } = useGetData('/rooms')
  const roomsContext = { rooms, loading, error }

  return <RoomsContext.Provider value={roomsContext}>{children}</RoomsContext.Provider>
}

export default RoomsProvider
