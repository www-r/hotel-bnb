import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import * as S from './Header.style'
import HeaderSearch from '@/components/Common/Header/HeaderSearch/HeaderSearch'
import HeaderTags from '@/components/Common/Tags/TagList'
import Logo from '@/components/Common/Logo'

const Header = () => {
  const [downward, setDownward] = useState(false)
  // this variable is used to store the last scroll position
  window.addEventListener(
    'scroll',
    function () {
      console.log(scrollY)
      // on scroll,
      if (scrollY < 50) {
        setDownward(false)
      } else if (scrollY > 50) {
        setDownward(true)
      }
      //lastScrollTop = scrollTop // update the last scroll position to the current one
    },
    false,
  )
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <HeaderSearch />
        <HeaderMenu />
      </S.Container>
      {downward ? (
        <></>
      ) : (
        <S.TagItemsContatiner>
          <HeaderTags />
        </S.TagItemsContatiner>
      )}
    </S.Header>
  )
}

export default Header
