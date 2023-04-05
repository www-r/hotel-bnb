import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'
import { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginProvider'

const Header = () => {
  const currentUser = useContext(LoginContext)
  const user = useContext(UserContext)
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer
          onClick={() => {
            console.log(currentUser, user)
          }}
        >
          로고
        </S.LogoContainer>
        <HeaderMenu />
      </S.Container>
    </S.Header>
  )
}

export default Header
