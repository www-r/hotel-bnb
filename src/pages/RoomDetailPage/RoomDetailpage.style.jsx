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
  }
`

export const Buttons = styled.div`
  display: flex;
`

export const ImagesContainer = styled.div`
  min-width: 1047.1px;
  min-height: 547.6px;
  display: flex;
  background-color: red;
  /* @media ${({ theme }) => theme.size.small} {
    max-width: 664px;
    max-height: 356px;
  }
  @media ${({ theme }) => theme.size.medium} {
    min-width: 664.1px;
    max-width: 1047px;
    min-height: 356.1px;
    max-height: 547.5px;
  }
  @media ${({ theme }) => theme.size.large} {
    min-width: 1047.1px;
    max-width: 1120px;
    min-height: 547.6px;
    max-height: 584px;
  } */
`

export const Main = styled.main`
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
        box-sizing: border-box;
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
  }
  .need-to-know-lists--container {
    .need-to-know-lists-wrapper {
      display: flex;
      .need-to-know--list {
        padding: 0 8px;
        width: calc(100% / 3);
        height: 169px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }
`
export const Aside = styled.aside`
  position: relative;
  height: 1475.5px;
`
