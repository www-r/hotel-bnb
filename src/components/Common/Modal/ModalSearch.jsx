import React from 'react'
import * as S from './ModalSearch.style'
import ModalSearchByLocation from './ModalSearchByLocation'
import { IconHeaderSearch } from '../../../assets/images'
import ModalSearchByDate from './ModalSearchByDate'

const ModalSearch = ({ state, click }) => {
  const handleClick = (e) => {
    if (e.target.className.includes('Container')) {
      click(false)
    } else if (e.target.className.includes('Wrapper')) {
      click(false)
    }
  }
  return (
    <S.SearchContainer className="Container" show={state} onClick={handleClick}>
      <S.SearchWrapper>
        <S.ContentContainer>
          <S.Paragraph>숙소</S.Paragraph>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentWrapper show={state} className="Wrapper" onClick={handleClick}>
            <S.Content>
              <p>여행지</p>
              <S.NoticeSpan>여행지 검색</S.NoticeSpan>
            </S.Content>
            <S.Line></S.Line>
            <S.Content>
              <p>체크인</p>
              <S.NoticeSpan>날짜 추가</S.NoticeSpan>
            </S.Content>
            <S.Line></S.Line>
            <S.Content>
              <p>체크아웃</p>
              <S.NoticeSpan>날짜 추가</S.NoticeSpan>
              <S.SearchIconContainer>
                <IconHeaderSearch />
              </S.SearchIconContainer>
            </S.Content>
            <ModalSearchByLocation show={state} />
            <ModalSearchByDate show={state} />
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.SearchWrapper>
    </S.SearchContainer>
  )
}

export default ModalSearch
