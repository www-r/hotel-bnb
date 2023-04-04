import React, { useContext } from 'react'
import { formatPrice } from '@/utils/format'
import { Heart } from '@/assets/images'
import { OverlayView } from '@react-google-maps/api'

import * as S from '@/components/Map/MapItem/MapItem.style'
import UserProvider from '../../../contexts/UserProvider'

const MapItem = ({ room, setSelectedMarker }) => {
  //   const iswish = userCtx.wishLists((item) => item.id === room.id)

  return (
    <OverlayView
      key={room.id}
      position={room.geoLocation}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <S.Button onClick={() => setSelectedMarker(room)}>
        <h1>￦{formatPrice(room.price)}</h1>
        {<Heart fill={'var(--color-main)'} />}
      </S.Button>
    </OverlayView>
  )
}

export default MapItem
