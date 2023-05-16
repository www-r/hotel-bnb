import styled from '@emotion/styled'

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 80px;
  margin: auto;
`
export const Container = styled.div`
  display: grid;
  place-content: center;
  margin: 48px 75px;
  padding: 20px 24px;
`
export const PageTitle = styled.div`
  margin: 40px 0;
  width: 100%;
`
export const PageTitleTitle = styled.h2`
  font-weight: 800;
  font-size: 32px;
  margin: 20px 0;
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Main = styled.main`
  padding: 0 8px;
`
export const ListItem = styled.form`
  width: 600px;
  padding: 24px 0;
  h3 {
    padding: 15px 0 5px;
    font-size: 22px;
    font-weight: 600px;
  }
`
export const Aside = styled.aside`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const AsideItem = styled.div`
  border: var(--border);
  border-radius: 12px;
  width: 333.33px;
  padding: 24px;
  height: fit-content;
  h3 {
    padding-top: 10px;
    font-size: 20px;
  }
  p {
    margin: 16px 0 0;
  }
`
export const DivisionLineRow = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--color-light-grey);
`
export const DivisionLineCol = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--color-light-grey);
`
export const Image = styled.div`
  background-image: url(${({ thumbnail }) => thumbnail});
  background-repeat: no-repeat;
`
export const Button = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 8px;
  span {
    padding-left: 5px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
  }
  &:hover {
    background-color: var(--color-footer-grey);
  }
`

export const UnderlinedButton = styled.button`
  text-decoration: underline;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: var(--font-semi-bold);
`
