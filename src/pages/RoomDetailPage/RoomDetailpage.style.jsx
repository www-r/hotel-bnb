import styled from '@emotion/styled'

export { Inner, DivisionLineRow, Button, UnderlinedButton } from '@/styles/common.style'

export const Main = styled.main`
  max-width: 1120px;
  position: relative;
  .main-top {
  }
  .main-middle {
    /* margin: 0 447px; */
    min-height: 1475.5px;
    display: flex;
    position: relative;
  }
  .main-bottom {
    height: 316px;
  }
  .description-item {
    padding: 48px 0;
    h2 {
      font-size: 22px;
      padding-bottom: 24px;
    }
    h3 {
      font-weight: var(--font-bold);
    }
  }
`
export const TitleSection = styled.div`
  /* margin-top: 80px; */
  padding-top: 48px;
  padding-bottom: 24px;
  .title {
    font-size: 26px;
  }
  .title-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    .title-desc--left {
      display: flex;
      gap: 8px;
    }
    .buttons {
      display: flex;
    }
  }
`
export const ImagesSection = styled.div`
  margin: 48px 0;
  .images-container {
    height: 453.8px;
    display: flex;
    gap: 8px;
    .image-thumbnail {
      max-width: 560px;
      min-width: 332px;
      max-height: 560px;
      min-height: 332px;
      background-color: red;
    }
    .images-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 8px;
      .image-item {
        max-width: 272px;
        min-width: 158px;
        max-height: 280px;
        min-height: 166px;
        background-color: red;
      }
    }
  }
`
export const MainSection = styled.div`
  position: relative;
  .room--detail-explanation {
    min-height: 300px;
    max-height: 500px;
    p {
      font-size: 18px;
    }
  }
  .room--amenities {
    min-height: 300px;
    max-height: 418px;
    .room--amenities-list {
      display: flex;
      flex-wrap: wrap;
      .room--amenity {
        width: 50%;
      }
    }
  }
  .room--calendar {
    min-height: 300px;
  }
`
export const AsideSection = styled.aside`
  position: relative;
  /* height: 100%; */
  min-height: 1475.5px;
  padding: 48px 0 48px 48px;
`
export const MapSection = styled.div``
export const NeedToKnowSection = styled.div`
  .need-to-know-lists {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    .need-to-know--list {
      text-align: left;
      padding: 0 8px;
      height: 169px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`
