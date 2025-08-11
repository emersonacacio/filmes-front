import { MouseEventHandler, useState, useCallback } from "react"
import { TriangleUp } from "@styled-icons/entypo"
import * as S from "./styles"

export type FilmCardProps = {
  title: string
  movieBanner: string
  description: string
  director: string
  producer: string
}

export const FilmCard = ({
  title,
  director,
  description,
  producer,
  movieBanner,
}: FilmCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickShowDescription: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      setIsOpen(!isOpen)
    }, [isOpen])

  const buttonText = isOpen ? "Ocultar a descrição" : "Mostrar a descrição"

  return (
    <S.WrapperFilmCard>
      <S.DataArea>
        <S.Image src={movieBanner} />
        <S.TitleArea>
          <S.Title>Título: {title}</S.Title>
          <S.Subtitle>Diretor: {director}</S.Subtitle>
          <S.Subtitle>Produtor: {producer}</S.Subtitle>
        </S.TitleArea>
        <S.OpenButton
          title={buttonText}
          isOpen={isOpen}
          onClick={handleClickShowDescription}
        >
          {buttonText} <TriangleUp />
        </S.OpenButton>
      </S.DataArea>

      {isOpen && <S.Description>{description}</S.Description>}
    </S.WrapperFilmCard>
  )
}
