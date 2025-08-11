import { memo } from "react"
import * as S from "./styles"

export const Logo = memo(() => (
  <S.WrapperLogo>
    <S.LeftText>Films</S.LeftText>
    <S.RightText>API</S.RightText>
  </S.WrapperLogo>
))
