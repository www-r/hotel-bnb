import React, { useState } from 'react'
import { IconHeaderMenu, IconHeaderAuthor } from '@/assets/images'
import * as S from './HeaderMenu.style'
import HeaderMenuModal from './HeaderMenuModal'

const HeaderMenu = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <S.MenuContainer
        width="77px"
        height="42px"
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <S.MenuImage src={IconHeaderMenu} width={'16px'} height={'16px'} />
        <S.MenuImage src={IconHeaderAuthor} width={'30px'} height={'30px'} />
      </S.MenuContainer>
      <HeaderMenuModal isClicked={isClicked} />
    </>
  )
}

export default HeaderMenu
