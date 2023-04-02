import React, { useState } from 'react'
import { IconHeaderMenu, IconHeaderAuthor } from '@/assets/images'
import * as S from './HeaderMenu.style'
import HeaderMenuModal from './HeaderMenuModal'

const HeaderMenu = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <S.MenuContainer
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <S.MenuImage src={IconHeaderMenu} width={'16px'} height={'16px'} />
        <S.MenuImage
          src={user ? (user[3] === '' ? IconHeaderAuthor : user[3]) : IconHeaderAuthor}
          width={'30px'}
          height={'30px'}
        />
      </S.MenuContainer>
      <HeaderMenuModal isClicked={isClicked} showModalFunc={setIsClicked} user={user} />
    </>
  )
}

export default HeaderMenu
