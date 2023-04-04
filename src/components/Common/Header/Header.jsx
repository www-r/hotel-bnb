import HeaderMenu from './HeaderMenu'
import * as S from './Header.style'
import { UserContext } from '../../../contexts/UserProvider'

const Header = () => {
  const user = useContext(UserContext)
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer
          onClick={() => {
            console.log(user)
          }}
        >
          로고
        </S.LogoContainer>
        <HeaderMenu user={user} />
      </S.Container>
    </S.Header>
  )
}

export default Header
