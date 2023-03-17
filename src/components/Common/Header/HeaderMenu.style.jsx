/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css } from '@emotion/react'

function Image({ src }) {
  return <img src={src} css={{ width: '100px', height: '100px', display: 'block', backgroundColor: 'white' }}></img>
}

export default Image
