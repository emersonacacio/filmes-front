import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ErrorArea = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
  `}
`
export const InputArea = styled.div`
  display: flex;

  flex-direction: row;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;
  ${media.lessThan("medium")`
    flex-direction: column;
    row-gap:1rem;
   `}
`

export const ResultsArea = styled.ul`
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100rem;
  margin: 3rem auto;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  box-shadow: 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  ${media.lessThan("medium")`
      width: 100%;
      height: 50vh;
   `}
`
