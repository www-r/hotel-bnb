import React from 'react'
import * as S from './ModalSearch.style'
import ModalSearchByLocation from './ModalSearchByLocation'
import { IconHeaderSearch } from '../../../assets/images'
import ModalSearchByDate from './ModalSearchByDate'

const ModalSearch = ({ state, click }) => {
  const handleClick = (e) => {
    if (e.target.className.includes('Container')) {
      click('')
    } else if (e.target.parentElement.className.includes('Wrapper')) {
      click(true)
    }
  }
  return (
    <S.SearchContainer className="Container" show={state} onClick={handleClick}>
      <S.SearchWrapper className="Wrapper">
        <S.ContentContainer>
          <S.Paragraph>숙소</S.Paragraph>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentWrapper show={state} onClick={handleClick}>
            <S.Content onClick={() => click('Location')} isFocused={state === 'Location'}>
              <p>여행지</p>
              <S.NoticeSpan>여행지 검색</S.NoticeSpan>
            </S.Content>
            <S.Line></S.Line>
            <S.Content onClick={() => click('Date')} isFocused={state === 'Date'}>
              <p>체크인</p>
              <S.NoticeSpan>날짜 추가</S.NoticeSpan>
            </S.Content>
            <S.Line></S.Line>
            <S.Content onClick={() => click('Date')} isFocused={state === 'Date'}>
              <p>체크아웃</p>
              <S.NoticeSpan>날짜 추가</S.NoticeSpan>
              <S.SearchIconContainer>
                <IconHeaderSearch />
              </S.SearchIconContainer>
            </S.Content>
            <ModalSearchByLocation show={state} click={click} />
            <ModalSearchByDate show={state} click={click} />
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.SearchWrapper>
    </S.SearchContainer>
  )
}

export default ModalSearch
