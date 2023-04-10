import React, { useContext } from 'react'
import { formatPrice } from '@/utils/format'
import { Heart } from '@/assets/images'
import { OverlayViewF, OverlayView } from '@react-google-maps/api'

import * as S from '@/components/Map/MapItem/MapItem.style'
import { UserContext } from '@/contexts/UserProvider'

const MapItem = ({ room, setSelectedMarker }) => {
  const userCtx = useContext(UserContext)

  const isWish = userCtx.userDetailInfo.wishLists.some((id) => id === room.id)

  return (
    <OverlayViewF
      key={room.id}
      position={room.geoLocation}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <S.Button onClick={() => setSelectedMarker(room)}>
        <h1>￦{formatPrice(room.price)}</h1>
        {isWish && <Heart fill={'var(--color-main)'} width={16} height={16} />}
      </S.Button>
    </OverlayViewF>
  )
}

export default MapItem
