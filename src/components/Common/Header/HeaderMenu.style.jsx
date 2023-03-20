/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

const type = {
  // container,
}

function Image({ src, width, height }) {
  return <img src={src} css={{ width: width, height: height }}></img>
}
function Division({ children, width = 'auto', height = 'auto', onClick }) {
  return (
    <div
      css={{
        width: width,
        height: height,
        padding: '10px',
        ...flexCenter,
        color: '#ddd',
        border: '1px solid',
        borderRadius: '25px',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export { Image, Division }
