import React, { useContext, useState } from 'react'
import * as S from './ModalSearch.style'
import ModalSearchByLocation from '@/components/Common/Header/HeaderSearch/ModalSearch/SearchBy/ModalSearchByLocation'
import { IconHeaderSearch } from '@/assets/images'
import ModalSearchByDate from '@/components/Common/Header/HeaderSearch/ModalSearch/SearchBy/ModalSearchByDate'
import { useNavigate } from 'react-router-dom'
import { RoomsContext } from '@/contexts/RoomsProvider'
import { getMonthDate, getCalTime } from '../../../../../utils/format'

const ModalSearch = ({ state, click }) => {
  const { rooms } = useContext(RoomsContext)
  const [value, setValue] = useState('')
  const [checkIn, setCheckIn] = useState()
  const [checkOut, setCheckOut] = useState()

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
    if (!value.location && !checkOut) {
      alert('장소 혹은 날짜를 선택해주세요')
      return
    }

    let res = rooms
    if (value.location) {
      res = res.filter((room) => room.location.includes(value.location))
    }
    if (checkOut) {
      const today = getCalTime(new Date().getTime())
      const checkOutCnt = checkOut.getTime() / 1000

      let calEnd = (checkOutCnt - today) / (24 * 3600)

      calEnd = Math.ceil(calEnd)

      res = res.filter((room) => room.reservation.end >= calEnd)
    }

    const url = value.loaction + 'date' + checkOut
    navigate(`/search/${url}`, {
      state: { res },
    })
    document.querySelector('#inputLocation').value = ''
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
                id="inputLocation"
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
              <S.NoticeSpan id="checkIn" bold={checkIn || checkOut}>
                {checkIn ? getMonthDate(checkIn) : '날짜 추가'}
              </S.NoticeSpan>
            </S.Content>
            <S.Line></S.Line>
            <S.Content onClick={() => click('Date')} isFocused={state === 'Date'}>
              <p>체크아웃</p>
              <S.NoticeSpan id="checkOut" bold={checkIn || checkOut}>
                {checkOut ? getMonthDate(checkOut) : '날짜 추가'}
              </S.NoticeSpan>
              <S.SearchIconContainer onClick={ClickSearch} className="image">
                <IconHeaderSearch className="image" />
              </S.SearchIconContainer>
            </S.Content>
            <ModalSearchByLocation show={state} click={click} />
            <ModalSearchByDate
              show={state}
              click={click}
              checkIn={checkIn}
              checkOut={checkOut}
              setCheckIn={setCheckIn}
              setCheckOut={setCheckOut}
            />
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.SearchWrapper>
    </S.SearchContainer>
  )
}

export default ModalSearch
