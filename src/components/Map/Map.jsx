import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import useGetRooms from '@/hooks/useGetRooms'
import RoomItem from '@/components/Room/RoomItem/RoomItem'

const containerStyle = {
  width: '1200px',
  height: '900px',
}

const centers = {
  lat: 36.34,
  lng: 127.77,
}

const Map = () => {
  const rooms = useGetRooms('/rooms')
  const [selectedMarker, setSelectedMarker] = useState(null)
  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={10}>
          {rooms.map((room) => (
            <Marker position={room.geoLocation} key={room.id} onClick={() => setSelectedMarker(room)} />
          ))}
          {selectedMarker && (
            <InfoWindow position={selectedMarker.geoLocation} onCloseClick={() => setSelectedMarker(null)}>
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
