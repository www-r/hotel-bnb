import HeaderMenu from './HeaderMenu/HeaderMenu'
import * as S from './Header.style'
import HeaderSearch from '@/components/Common/Header/HeaderSearch/HeaderSearch'
import HeaderTags from '@/components/Common/Tags/TagList'
import Logo from '@/components/Common/Logo'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Logo />
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
