import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import useGetRooms from '../../hooks/useGetRooms'

const containerStyle = {
  width: '900px',
  height: '900px',
}

const centers = {
  lat: 37.5400456,
  lng: 126.9921017,
}

const arr = [
  {
    a: 11,
    b: 22,
  },
  {
    a: 11,
    b: 22,
  },
]

const MapPage = () => {
  const rooms = useGetRooms('/rooms')
  const [selectedMarker, setSelectedMarker] = useState(null)
  console.log(selectedMarker)
  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={10}>
          {rooms?.map((room) => (
            <Marker position={room.geoLocation} key={room.id} onClick={() => setSelectedMarker(room)} />
          ))}
          {selectedMarker && (
            <InfoWindow position={selectedMarker.geoLocation}>
              <div>
                <h2>{selectedMarker.title}</h2>
                <h2>{selectedMarker.price}</h2>
                <button onClick={() => setSelectedMarker(null)}>close</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default MapPage
