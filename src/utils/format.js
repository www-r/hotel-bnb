export const formatDate = (date) => {
  let reservStart = new Date()
  let reservEnd = new Date()

  reservStart = new Date(reservStart.setDate(reservStart.getDate() - date.start))
  reservEnd = new Date(reservEnd.setDate(reservEnd.getDate() + date.end))

  return `${String(reservStart.getMonth() + 1).padStart(2, '0')}월 ${String(reservStart.getDate()).padStart(
    2,
    '0',
  )}일 ~  ${String(reservEnd.getMonth() + 1).padStart(2, '0')}월 ${String(reservEnd.getDate())}일`
}

export const formatPrice = (price) => {
  if (price) {
    return price.toLocaleString()
  }
}
