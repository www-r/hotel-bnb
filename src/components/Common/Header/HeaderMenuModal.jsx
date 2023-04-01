import React, { useContext, useState } from 'react'
import * as S from '@/components/Common/Header/HeaderMenuModal.style'
import ModalLogin from '../Modal/ModalLogin'
import { useNavigate } from 'react-router-dom'
import ModalSignUp from '../Modal/ModalSignUp'
import { logout } from '../../../firebase'
import { UsersContext } from '../../../contexts/UsersProvider'

const HeaderMenuModal = ({ isClicked, showModalFunc }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const { users } = useContext(UsersContext)

  const navigate = useNavigate()
  return (
    <S.ModalMenu isClicked={isClicked}>
      <S.ContentList>
        <S.ContentItem
          onClick={() => {
            users ? logout() : setShowLogin(true)
            users ? showModalFunc(false) : void 0
          }}
        >
          {users ? '로그아웃' : '로그인'}
        </S.ContentItem>
        <S.ContentItem>예약 내역</S.ContentItem>
        <S.ContentItem>위시 리스트</S.ContentItem>
        <S.ContentItem>개인 정보 수정</S.ContentItem>
        <S.ContentItem>결제 수단 관리</S.ContentItem>
        <S.ContentItem onClick={() => navigate(`/admin/`)}>Room 추가</S.ContentItem>
      </S.ContentList>
      <ModalLogin
        open={showLogin}
        closeFunc={setShowLogin}
        openSignUp={setShowSignUp}
        showModalFunc={showModalFunc}
      />
      <ModalSignUp open={showSignUp} set={setShowSignUp} />
    </S.ModalMenu>
  )
}

export default HeaderMenuModal
