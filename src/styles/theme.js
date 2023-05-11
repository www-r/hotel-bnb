const deviceSizes = {
  small: '743px',
  medium: '1127px',
  large: '1439px',
}

const size = {
  small: `screen and (max-width: ${deviceSizes.small})`,
  medium: `screen and (max-width: ${deviceSizes.medium})`,
  large: `screen and (max-width: ${deviceSizes.large})`,
}

const theme = {
  size,
}

export default theme
