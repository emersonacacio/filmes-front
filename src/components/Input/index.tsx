import { SelectHTMLAttributes } from "react"
import * as S from "./styles"

type TInputProps = {
  isError?: boolean
  title?: string
  errorMessage?: string
  type?: string
} & SelectHTMLAttributes<HTMLInputElement>

export function Input({
  title,
  isError,
  errorMessage = "",
  type,
  ...props
}: TInputProps) {
  return (
    <S.InputWrapper>
      {title && <S.Title>{title}</S.Title>}
      <S.StyledInput {...(type ? { type } : {})} {...props} />
      {isError && <S.Error>{errorMessage}</S.Error>}
    </S.InputWrapper>
  )
}
