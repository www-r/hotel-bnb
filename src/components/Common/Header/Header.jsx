import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'
import { useContext, useState } from 'react'
import HeaderSearch from './HeaderSearch'
import HeaderTags from './HeaderTags'
import ModalSearch from '../Modal/ModalSearch'
import { Link } from 'react-router-dom'

const Header = () => {
  const userCtx = useContext(UserContext)
  const [clickSearch, setClickSearch] = useState(false)
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
        <HeaderSearch click={setClickSearch} />
        <HeaderMenu />
      </S.Container>
      <S.TagItemsContatiner>
        <HeaderTags />
      </S.TagItemsContatiner>
      <ModalSearch state={clickSearch} click={setClickSearch} />
    </S.Header>
  )
}

export default Header
