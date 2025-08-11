import { memo } from "react"
import { Logo } from "components/Logo"
import * as S from "./styles"

export const Header = memo(() => (
  <S.WrapperHeader aria-label="Cabeçalho da aplicação" role="banner">
    <Logo />
  </S.WrapperHeader>
))
