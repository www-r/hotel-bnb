export const formatDate = (date) => {
  return `${date.slice(5, 7)}월 ${date.slice(8, 10)}일`
}

export const formatPrice = (price) => {
  if (price) {
    return price.toLocaleString()
  }
}
