/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const flexSpaceBetween = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

function Container({ children }) {
  return <div css={{ width: '1800px', height: '80px', ...flexSpaceBetween }}>{children}</div>
}

export { Container }

// export const RoomItemImg = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   border-radius: 10px;
// `
// export const RoomItemText = styled.div`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   border-radius: 10px;
// `

// export const RoomItemTitle = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
