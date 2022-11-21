import styled, { css } from "styled-components"

export const WrapperLogo = styled.span`
  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.blue};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1;
    display: inline-flex;
    align-items: center;
  `}
`

export const LeftText = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    padding: 0.5rem;
  `}
`
export const RightText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    padding: 0.5rem;
    font-weight: ${theme.font.bold};
  `}
`
