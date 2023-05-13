import React from 'react'
import { Global, css } from '@emotion/react'
import { generateMedia } from 'styled-media-query'
import '../assets/fonts/fonts.css'

const reset = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button,
  img,
  strong,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  footer,
  header,
  menu,
  nav,
  section,
  summary {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  html {
    scroll-behavior: smooth;
    min-width: 744px;
  }
  body {
    line-height: 1.43;
    color: #222;
  }
  ol,
  ul {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
`

const style = css`
  :root {
    /** Common */
    --box-shadow: 0 0 10px #ddd;

    /** Font */
    --font-normal: 400;
    --font-semi-bold: 600;
    --font-bold: 800;

    /** Color */
    --color-main: #4266db;
    --color-footer-grey: #f7f7f7;
    --color-light-grey: #ddd;
    --color-white: #fff;
    --color-black: #222;
    --color-heart: #ff385c;

    /** Border */
    --border-button-radius: 26px;
    --border-container-radius: 12px;
    --border: 1px solid #ddd;
  }

  body {
    font-family: 'Pretendard';
  }

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
  }
`

const GlobalStyle = () => {
  return (
    <>
      <Global styles={style} />
      <Global styles={reset} />
    </>
  )
}

export default GlobalStyle
