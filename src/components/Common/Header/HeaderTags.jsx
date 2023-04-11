import React from 'react'
import HeaderTagItem from './HeaderTagItem'
import { TagsData } from '../../../constants/tags'
import Slider from 'react-slick'
import styled from 'styled-components'
import './slick.css'
import './slick-theme.css'

const HeaderTags = () => {
  return (
    <>
      <StyledSlider {...settings}>
        {TagsData.map((tag) => (
          <HeaderTagItem key={tag.text} text={tag.text} img={tag.img} />
        ))}
      </StyledSlider>
    </>
  )
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 6,
  // variableWidth: true,
}

const StyledSlider = styled(Slider)``

export default HeaderTags
