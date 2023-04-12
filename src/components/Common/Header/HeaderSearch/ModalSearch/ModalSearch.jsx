import React, { useContext, useState } from 'react'
import * as S from './ModalSearch.style'
import ModalSearchByLocation from '@/components/Common/Header/HeaderSearch/ModalSearch/SearchBy/ModalSearchByLocation'
import { IconHeaderSearch } from '@/assets/images'
import ModalSearchByDate from '@/components/Common/Header/HeaderSearch/ModalSearch/SearchBy/ModalSearchByDate'
import { useNavigate } from 'react-router-dom'
import { RoomsContext } from '@/contexts/RoomsProvider'

const ModalSearch = ({ state, click }) => {
  const { rooms } = useContext(RoomsContext)
  const [value, setValue] = useState('')
  const handleClick = (e) => {
    if (e.target.tagName !== 'DIV') {
      return
    }
    if (e.target.className.includes('Container')) {
      click('')
    } else if (e.target.parentElement.className.includes('Wrapper')) {
      click(true)
    }
  }

  const navigate = useNavigate()

  const ClickSearch = () => {
    if (!value.location) {
      return
    }

    const res = rooms.filter((room) => room.location.includes(value.location))
    navigate(`/search/${value.location}`, {
      state: { res },
    })
    setValue('')
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
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
              <S.NoticeInput
                placeholder="여행지 검색"
                onChange={handleChange}
                name="location"
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    ClickSearch()
                  }
                }}
              />
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
              <S.SearchIconContainer onClick={ClickSearch} className="image">
                <IconHeaderSearch className="image" />
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
