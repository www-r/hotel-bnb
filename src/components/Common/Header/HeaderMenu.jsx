import React from 'react'
import { IconHeaderMenu } from '@/public/index.js'
import { Image, Division } from './HeaderMenu.style'
import { IconHeaderAuthor } from '../../../public'

const HeaderMenu = () => {
  return (
    <Division width="77px" height="42px" onClick={() => console.log('click')}>
      <Image src={IconHeaderMenu} width={'16px'} height={'16px'} />
      <Image src={IconHeaderAuthor} width={'30px'} height={'30px'} />
    </Division>
  )
}

export default HeaderMenu
