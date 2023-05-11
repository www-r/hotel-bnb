import styled from '@emotion/styled'
import { UnderlinedButton } from '../../styles/common.style'
export { DivisionLineRow, DivisionLineCol } from '../../styles/common.style'
export const ReservationCard = styled.div`
  /* box-sizing: border-box; */
  position: sticky;
  top: 0;
  right: 0;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-container-radius);
  border: var(--border);
  margin: 50px 0 50px 50px;
  padding: 24px;
  min-width: 296px;
  max-width: 355px;
  /* height: 460.5px; */
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const ReservationCardTitle = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .price-per-day {
    font-size: 22px;
    font-weight: var(--font-semi-bold);
    span {
      font-size: 16px;
      font-weight: var(--font-normal);
    }
  }
  .star-rate {
    display: flex;
    font-size: 14px;
    .star-rate--number {
      font-weight: var(--font-semi-bold);
    }
  }
`
export const ReservationCardInfo = styled.div`
  .reservation-info {
    box-sizing: border-box;
    border-radius: var(--border-container-radius);
    border: var(--border);
    .reservation-info--item {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex-shrink: 0;
      .reservation-info--title {
        font-size: 12px;
        font-weight: var(--font-semi-bold);
      }
      .reservation-info--value {
        font-size: 14px;
      }
    }
    .reservation--date {
      /* padding: 10px 12px 0; */
      border: 1.5px solid transparent;
      height: 56px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      &:hover {
        border-radius: var(--border-container-radius);
        border: 1.5px solid var(--color-black);
      }
      .check-in--date {
        padding: 10px 0 0 12px;
      }
      .check-out--date {
        padding: 10px 12px 0 0;
        position: relative;
        &::before {
          content: '';
          width: 1px;
          height: 100%;
          background-color: var(--color-light-grey);
          position: absolute;
          top: 0;
        }
        .label--check-out {
          margin-left: 12px;
        }
      }
    }
    .reservation--number-of-people {
      padding: 5px 12px 10px;
      border: 1.5px solid transparent;
      height: 56px;
      &:hover {
        border-radius: var(--border-container-radius);
        border: 1.5px solid var(--color-black);
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  .reservation-button {
    margin-top: 15px;
    width: 100%;
    height: 48px;
    border-radius: var(--border-container-radius);
    background-color: var(--color-main);
    color: var(--color-white);
  }
  .reservation-pre-message {
    padding: 16px 0 0;
    font-size: 14px;
    text-align: center;
  }
`
export const ReservationCardPrice = styled.div`
  .reservation-price--calculate {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    div {
      display: flex;
      justify-content: space-between;
    }
    .price--basic {
    }
    .price--extra {
    }
  }
  .reservation-price--total {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
  }
`

export const ReportRoomButton = styled(UnderlinedButton)`
  font-size: 14px;
  position: absolute;
  bottom: -40px;
  left: 30%;
  color: #717171;
  font-weight: var(--font-normal);
`
