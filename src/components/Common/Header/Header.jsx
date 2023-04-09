import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import HeaderSearch from './HeaderSearch'
import HeaderTags from './HeaderTags'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <HeaderLogo />
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
