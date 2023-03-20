/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const flexSpaceBetween = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

function Container({ children }) {
  return <div css={{ width: '1800px', height: '80px', ...flexSpaceBetween }}>{children}</div>
}

export { Container }
