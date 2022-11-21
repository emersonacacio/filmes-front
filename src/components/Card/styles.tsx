import styled, { css } from "styled-components"

interface IOpenButton {
  isOpen?: boolean
}

export const WrapperFilmCard = styled.li`
  list-style-type: none;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 0.5rem;
`

export const Image = styled.img`
  width: 20rem;
`

export const DataArea = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-start;
  padding: 0.5rem 0 0.5rem 0;
`

export const TitleArea = styled.div`
  flex: 1;
  margin-left: 0.5rem;
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0.5rem;
  `}
`

export const OpenButton = styled.div<IOpenButton>`
  ${({ theme, isOpen = false }) =>
    css`
      align-self: flex-end;
      font-size: ${theme.font.sizes.small};
      svg {
        height: ${theme.font.sizes.large};
        transform: rotate(${isOpen ? "0" : "180"}deg);
      }
      &:hover {
        cursor: pointer;
      }
    `}
`
