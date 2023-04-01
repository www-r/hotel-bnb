import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, OverlayView } from '@react-google-maps/api'
import { RoomsContext } from '@/contexts/RoomsProvider'

import { formatPrice } from '@/utils/format'
import RoomItem from '@/components/Room/RoomItem/RoomItem'
import * as S from '@/components/Map/Maplist/MapList.style'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const centers = {
  lat: 36.34,
  lng: 127.77,
}

const MapList = ({ rooms }) => {
  const [selectedMarker, setSelectedMarker] = useState(null)

  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={10}>
          {rooms.map((room) => (
            <OverlayView
              key={room.id}
              position={room.geoLocation}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <S.Button onClick={() => setSelectedMarker(room)}>
                <h1>￦{formatPrice(room.price)}</h1>
              </S.Button>
            </OverlayView>
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.geoLocation}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <RoomItem room={selectedMarker} setSelectedMarker={setSelectedMarker}>
                <button onClick={() => setSelectedMarker(null)}>close</button>
              </RoomItem>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default MapList
