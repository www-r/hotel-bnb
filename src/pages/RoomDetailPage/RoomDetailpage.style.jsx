import styled from '@emotion/styled'

export { Body, Inner, DivisionLineRow, Button, UnderlinedButton } from '@/styles/common.style'

export const TitleSection = styled.div`
  /* margin-top: 80px; */
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
  .descriptions-wrapper {
    .room--detail-explanation {
      min-height: 200px;
      max-height: 500px;
      p {
        font-size: 18px;
      }
    }
    .room--summary {
      min-height: 200px;
      max-height: 288.5px;
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
      min-height: 200px;
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
  max-height: 1475.5px;
  padding: 48px 0 48px 48px;
`
