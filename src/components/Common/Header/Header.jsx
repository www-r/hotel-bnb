import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'
import { useContext } from 'react'

const Header = () => {
  const userCtx = useContext(UserContext)
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer
          onClick={() => {
            console.log(userCtx)
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
