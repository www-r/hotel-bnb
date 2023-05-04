import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Icon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;

  & svg:active {
    transform: scale(1.2);
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: var(--border-container-radius);
  background-image: url(${({ img }) => img});
  background-size: 500px 350px;
  background-position: center;
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: var(--border-container-radius);
`
export const TextContainer = styled.div``

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

/** 550x 743px(검색창 사라짐) 950px 1127px 1433px 1640px */
