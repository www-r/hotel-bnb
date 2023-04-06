import React from 'react'
import HeaderTagItem from './HeaderTagItem'
import { TagsData } from '../../../constants/tags'

const HeaderTags = () => {
  return (
    <>
      {TagsData.map((tag) => (
        <HeaderTagItem key={tag.text} text={tag.text} img={tag.img} />
      ))}
    </>
  )
}

export default HeaderTags
