import React from 'react'
import { Link } from 'react-router-dom'

function PayRedirectPage(props) {
  return (
    <div>
      <div>{props.title}</div>
      {props.message && (
        <button>
          <Link to={props.navigate}>{props.message}</Link>
        </button>
      )}
    </div>
  )
}

export default PayRedirectPage
