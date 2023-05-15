import React, { useEffect, useLayoutEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import * as S from './Header.style'
import HeaderSearch from '@/components/Common/Header/HeaderSearch/HeaderSearch'
import HeaderTags from '@/components/Common/Tags/TagList'
import Logo from '@/components/Common/Logo'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  console.log(scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // this variable is used to store the last scroll position

  return (
    <S.Header>
      <S.Container>
        <Logo />
        <HeaderSearch />
        <HeaderMenu />
      </S.Container>
      {visible && (
        <S.TagItemsContatiner>
          <HeaderTags />
        </S.TagItemsContatiner>
      )}
    </S.Header>
  )
}

export default Header
