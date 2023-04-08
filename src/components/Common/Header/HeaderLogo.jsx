import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserProvider'
import { Link } from 'react-router-dom'
import * as S from './HeaderLogo.style'

const HeaderLogo = () => {
  const userCtx = useContext(UserContext)
  return (
    <Link to="/">
      <S.LogoContainer
        onClick={() => {
          console.log(userCtx)
        }}
      >
        로고
      </S.LogoContainer>
    </Link>
  )
}

export default HeaderLogo
