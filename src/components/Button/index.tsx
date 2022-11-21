import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.bold};
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`
