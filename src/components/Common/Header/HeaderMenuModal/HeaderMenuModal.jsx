import React, { useContext, useState } from 'react'
import * as S from './HeaderMenuModal.style'
import ModalLogin from '@/components/Login/Login'
import { useNavigate, Link } from 'react-router-dom'
import ModalSignUp from '@/components/Signup/Signup'
import { logout } from '../../../../firebase'
import { UserContext } from '@/contexts/UserProvider'

const HeaderMenuModal = ({ isClicked, showModalFunc }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const userCtx = useContext(UserContext)

  const navigate = useNavigate()
  return (
    <S.ModalMenu isClicked={isClicked}>
      <S.ContentList>
        {userCtx.email ? (
          <>
            <S.ContentItem
              onClick={() => {
                logout(), showModalFunc(false)
              }}
            >
              로그아웃
            </S.ContentItem>

            <Link to="/account" style={{ width: '100%' }}>
              <S.ContentItem>예약 내역</S.ContentItem>
            </Link>
            <Link to="/wishlist" style={{ width: '100%' }}>
              <S.ContentItem>위시 리스트</S.ContentItem>
            </Link>
            <Link to="/personalInfo" style={{ width: '100%' }}>
              <S.ContentItem>개인 정보 수정</S.ContentItem>
            </Link>
          </>
        ) : (
          <S.ContentItem onClick={() => setShowLogin(true)}>로그인</S.ContentItem>
        )}{' '}
        <Link to="/admin" style={{ width: '100%' }}>
          <S.ContentItem>Room 추가</S.ContentItem>
        </Link>
      </S.ContentList>
      <ModalLogin
        open={showLogin}
        closeFunc={setShowLogin}
        openSignUp={setShowSignUp}
        showModalFunc={showModalFunc}
      />
      <ModalSignUp open={showSignUp} set={setShowSignUp} showModalFunc={showModalFunc} />
    </S.ModalMenu>
  )
}

export default HeaderMenuModal
