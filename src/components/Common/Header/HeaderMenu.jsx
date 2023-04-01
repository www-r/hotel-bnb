import React, { useContext, useState } from 'react'
import { IconHeaderMenu, IconHeaderAuthor } from '@/assets/images'
import * as S from './HeaderMenu.style'
import HeaderMenuModal from './HeaderMenuModal'
import { UsersContext } from '../../../contexts/UsersProvider'

const HeaderMenu = () => {
  const [isClicked, setIsClicked] = useState(false)
  const { users } = useContext(UsersContext)
  return (
    <>
      <S.MenuContainer
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <S.MenuImage src={IconHeaderMenu} width={'16px'} height={'16px'} />
        <S.MenuImage src={users ? users[3] : IconHeaderAuthor} width={'30px'} height={'30px'} />
      </S.MenuContainer>
      <HeaderMenuModal isClicked={isClicked} showModalFunc={setIsClicked} />
    </>
  )
}

export default HeaderMenu
