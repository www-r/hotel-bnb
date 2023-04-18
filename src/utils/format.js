export const formatDate = (date) => {
  let reservStart = new Date()
  let reservEnd = new Date()

  reservStart = new Date(reservStart.setDate(reservStart.getDate() - date.start))
  reservEnd = new Date(reservEnd.setDate(reservEnd.getDate() + date.end))

  return `${String(reservStart.getMonth() + 1).padStart(2, '0')}월 ${String(
    reservStart.getDate(),
  ).padStart(2, '0')}일 ~  ${String(reservEnd.getMonth() + 1).padStart(2, '0')}월 ${String(
    reservEnd.getDate(),
  )}일`
}

export const formatPrice = (price) => {
  if (price) {
    return price.toLocaleString()
  }
}

export const getMonthDate = (date) => {
  const dt = new Date(date)
  return dt.getMonth() + 1 + '월 ' + dt.getDate() + '일'
}

export const getCalTime = (date) => {
  const dt = new Date(date)
  return (dt.getTime() - (dt.getTime() % (3600 * 24))) / 1000
}

export const getNightAndDay = (chkIn, chkOut) => {
  let offset = 0
  const checkIn = chkIn.getDate()
  if (chkIn.getMonth() < chkOut.getMonth()) {
    offset = new Date(chkIn.getYear(), chkIn.getMonth() + 1, 0).getDate()
  }

  const checkOut = chkOut.getDate() + offset
  const night = checkOut - checkIn
  const day = night + 1

  return night + '박 ' + day + '일'
}

export const getReservationDay = (res) => {
  const today = new Date().getTime()
  // const start =
}
