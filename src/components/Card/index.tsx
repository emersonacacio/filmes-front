import { MouseEventHandler, useState, memo, useCallback } from "react"
import { TriangleUp } from "@styled-icons/entypo"
import * as S from "./styles"

export type FilmCardProps = {
  title: string
  movieBanner: string
  description: string
  director: string
  producer: string
}

export const FilmCard = memo(
  ({ title, director, description, producer, movieBanner }: FilmCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickShowDescription: MouseEventHandler<HTMLDivElement> =
      useCallback(() => {
        setIsOpen((prev) => !prev)
      }, [])

    const toggleButtonText = isOpen
      ? "Ocultar a descrição"
      : "Mostrar a descrição"

    return (
      <S.WrapperFilmCard>
        <S.DataArea>
          <S.Image src={movieBanner} alt={`Pôster do filme ${title}`} />
          <S.TitleArea>
            <S.Title>Título: {title}</S.Title>
            <S.Subtitle>Diretor: {director}</S.Subtitle>
            <S.Subtitle>Produtor: {producer}</S.Subtitle>
          </S.TitleArea>
          <S.OpenButton
            title={toggleButtonText}
            isOpen={isOpen}
            onClick={handleClickShowDescription}
            aria-expanded={isOpen}
            aria-controls={`description-${title}`}
          >
            {toggleButtonText} <TriangleUp />
          </S.OpenButton>
        </S.DataArea>

        {isOpen && (
          <S.Description
            id={`description-${title}`}
            role="region"
            aria-label="Descrição do filme"
          >
            {description}
          </S.Description>
        )}
      </S.WrapperFilmCard>
    )
  },
)
