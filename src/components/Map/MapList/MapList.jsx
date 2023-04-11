import React, { useState, useRef } from 'react'
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api'

import RoomItem from '@/components/Room/RoomItem/RoomItem'
import MapItem from '../MapItem/MapItem'
import * as S from '@/components/Map/Maplist/MapList.style'
import useClickOutside from '@/hooks/useClickOutside'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const center = {
  lat: 36.34,
  lng: 127.77,
}

const MapList = ({ rooms }) => {
  const ModalRef = useRef(null)

  // useClickOutside(ModalRef, () => {
  //   setSelectedMarker(null)
  // })

  console.log(ModalRef.current)

  const [selectedMarker, setSelectedMarker] = useState(null)

  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          {rooms.map((room) => (
            <MapItem room={room} key={room.id} setSelectedMarker={setSelectedMarker} />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.geoLocation}
              onCloseClick={() => setSelectedMarker(null)}
              options={{ maxWidth: 320 }}
            >
              <RoomItem room={selectedMarker} setSelectedMarker={setSelectedMarker}>
                <button ref={ModalRef} onClick={() => setSelectedMarker(null)}>
                  close
                </button>
              </RoomItem>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default MapList
