import React, { useState } from 'react'
import * as S from '@/components/Common/Header/HeaderMenuModal.style'
import ModalLogin from '../Modal/ModalLogin'

const HeaderMenuModal = ({ isClicked }) => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <S.ModalMenu isClicked={isClicked}>
      <S.ContentList>
        <S.ContentItem
          onClick={() => {
            setShowLogin(true)
          }}
        >
          로그인/로그아웃
        </S.ContentItem>
        <S.ContentItem>예약 내역</S.ContentItem>
        <S.ContentItem>위시 리스트</S.ContentItem>
        <S.ContentItem>개인 정보 수정</S.ContentItem>
        <S.ContentItem>결제 수단 관리</S.ContentItem>
      </S.ContentList>
      <ModalLogin open={showLogin} />
    </S.ModalMenu>
  )
}

export default HeaderMenuModal
