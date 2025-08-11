import { memo, useCallback } from "react"
import { Button } from "components/Button"
import * as S from "./styles"

export type PageSelectProps = {
  page: number
  pageNumber: number
  handlePage?: (_page: number) => void
}

export const PageSelect = memo(
  ({ page, pageNumber, handlePage }: PageSelectProps) => {
    const handleClickNext = useCallback<
      React.MouseEventHandler<HTMLButtonElement>
    >(() => {
      const nextPage = page + 1
      if (nextPage <= pageNumber && handlePage) {
        handlePage(nextPage)
      }
    }, [page, pageNumber, handlePage])

    const handleClickPrevious = useCallback<
      React.MouseEventHandler<HTMLButtonElement>
    >(() => {
      const previousPage = page - 1
      if (previousPage > 0 && handlePage) {
        handlePage(previousPage)
      }
    }, [page, handlePage])

    const isFirstPage = page <= 1
    const isLastPage = page >= pageNumber

    return (
      <S.WrapperPageSelect role="navigation" aria-label="Navegação de páginas">
        <Button
          onClick={handleClickPrevious}
          disabled={isFirstPage}
          aria-label="Ir para página anterior"
        >
          Anterior
        </Button>
        <S.Page aria-current="page" aria-label={`Página atual: ${page}`}>
          {page}
        </S.Page>
        <Button
          onClick={handleClickNext}
          disabled={isLastPage}
          aria-label="Ir para próxima página"
        >
          Próxima
        </Button>
      </S.WrapperPageSelect>
    )
  },
)
