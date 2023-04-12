import React from 'react'
import HeaderTagItem from './TagItem/TagItem'
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
  className: 'center',
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 10,
  swipeToSlide: true,
}

const StyledSlider = styled(Slider)``

export default HeaderTags
