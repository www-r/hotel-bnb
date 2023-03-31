import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { RoomsContext } from '@/contexts/RoomsProvider'

import RoomItem from '@/components/Room/RoomItem/RoomItem'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const centers = {
  lat: 36.34,
  lng: 127.77,
}

const Map = () => {
  const roomsCtx = useContext(RoomsContext)
  const { rooms, loading, error } = roomsCtx

  const [selectedMarker, setSelectedMarker] = useState(null)
  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={10}>
          {rooms.map((room) => (
            <Marker
              position={room.geoLocation}
              key={room.id}
              onClick={() => setSelectedMarker(room)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.geoLocation}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <RoomItem room={selectedMarker} setSelectedMarker={setSelectedMarker}>
                {/* <button onClick={() => setSelectedMarker(null)}>close</button> */}
              </RoomItem>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default Map
