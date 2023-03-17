/** @jsxImportSource @emotion/react */
import React from 'react'
import { IconHeaderMenu } from '@/public/index.js'
import Image from './HeaderMenu.style'

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      HeaderMenu
      <div className="btnMenu">
        <button>
          <div className=" dir dir-ltr">
            <Image src={IconHeaderMenu} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default HeaderMenu
