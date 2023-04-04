import React, { useState } from 'react'
import { IconHeaderMenu, IconHeaderAuthor } from '@/assets/images'
import * as S from './HeaderMenu.style'
import HeaderMenuModal from './HeaderMenuModal'
import { UserContext } from '@/contexts/UserProvider'
import { LoginContext } from '@/contexts/LoginProvider'

const HeaderMenu = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false)
  const currentUser = useContext(LoginContext)
  // console.log('loginCtx', currentUser)
  return (
    <>
      <S.MenuContainer
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <S.MenuImage src={IconHeaderMenu} width={'16px'} height={'16px'} />
        <S.MenuImage
          src={
            currentUser
              ? currentUser[3] === ''
                ? IconHeaderAuthor
                : currentUser[3]
              : IconHeaderAuthor
          }
          width={'30px'}
          height={'30px'}
        />
      </S.MenuContainer>
      <HeaderMenuModal isClicked={isClicked} showModalFunc={setIsClicked} user={user} />
    </>
  )
}

export default HeaderMenu
