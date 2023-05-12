import styled from '@emotion/styled'

export { Body, Inner, DivisionLineRow, Button, UnderlinedButton } from '@/styles/common.style'

export const TitleSection = styled.div`
  padding-top: 24px;
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

export const Main = styled.main`
  position: relative;
  .main-wrapper {
    display: flex;
  }
  .descriptions-wrapper {
    height: 1475.5px;
    .room--detail-explanation {
      height: 261px;
    }
    .room--summary {
      height: 288.5px;
      .room--summary--item {
        border-radius: var(--border-container-radius);
        border: var(--border);
        height: 142.5px;
        min-width: 180px;
        max-width: 290px;
        padding: 24px;
      }
    }
    .room--amenities {
      height: 418px;
      .room--amenities-list {
        display: flex;
        flex-wrap: wrap;
        .room--amenity {
          width: 50%;
        }
      }
    }
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
    .room--calendar {
      min-width: 624px;
    }
  }
  .need-to-know-lists--container {
    .need-to-know-lists-wrapper {
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
  }
`
export const Aside = styled.aside`
  position: relative;
  height: 1475.5px;
`
