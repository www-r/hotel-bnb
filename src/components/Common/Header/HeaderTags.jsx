import React from 'react'
import HeaderTagItem from './HeaderTagItem'
import * as S from './HeaderTags.style'
import {
  Amazing,
  Beach,
  Farm,
  GreatestView,
  Hottest,
  KoreanHouse,
  PrivateRoom,
  Ryokan,
  CountrySide,
} from '../../../assets/images'

const HeaderTags = () => {
  return (
    <>
      <HeaderTagItem text={'농장'} img={Farm} />
      <HeaderTagItem text={'해변 바로 앞'} img={Beach} />
      <HeaderTagItem text={'한적한 시골'} img={CountrySide} />
      <HeaderTagItem text={'개인실'} img={PrivateRoom} />
      <HeaderTagItem text={'최고의 전망'} img={GreatestView} />
      <HeaderTagItem text={'기상천외한 숙소'} img={Amazing} />
      <HeaderTagItem text={'한옥'} img={KoreanHouse} />
      <HeaderTagItem text={'인기 급상승'} img={Hottest} />
      <HeaderTagItem text={'료칸'} img={Ryokan} />
    </>
  )
}

export default HeaderTags
