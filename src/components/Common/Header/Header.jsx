import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'
import { useContext } from 'react'
import HeaderSearch from './HeaderSearch'
import HeaderTags from './HeaderTags'
import { Link } from 'react-router-dom'

const Header = () => {
  const userCtx = useContext(UserContext)
  return (
    <S.Header>
      <S.Container>
        <Link to="/">
          <S.LogoContainer
            onClick={() => {
              console.log(userCtx)
            }}
          >
            로고
          </S.LogoContainer>
        </Link>
        <HeaderSearch />
        <HeaderMenu />
      </S.Container>
      <S.TagItemsContatiner>
        <HeaderTags />
      </S.TagItemsContatiner>
    </S.Header>
  )
}

export default Header
