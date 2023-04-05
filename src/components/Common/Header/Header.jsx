import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'
import { useContext } from 'react'
import HeaderSearch from './HeaderSearch'
import HeaderTags from './HeaderTags'

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
        <HeaderSearch />
        <HeaderMenu />
      </S.Container>
      <S.Container>
        <HeaderTags />
      </S.Container>
    </S.Header>
  )
}

export default Header
