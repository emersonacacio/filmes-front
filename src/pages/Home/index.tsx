import { useMemo } from "react"
import MoonLoader from "react-spinners/MoonLoader"
import { FilmCard } from "components/Card"
import { Header } from "components/Header"
import { PageSelect } from "components/PageSelect"
import { useData } from "hooks/useData"
import { theme } from "styles/theme"

import * as S from "./styles"

function Home(): JSX.Element {
  const { data, error, page, setPage, loading } = useData()

  const filmCards = useMemo(
    () =>
      data.films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          description={film.description}
          producer={film.producer}
          director={film.director}
          movieBanner={film.movie_banner}
        />
      )),
    [data.films],
  )

  const hasFilms = data.films.length > 0

  return (
    <>
      <Header />
      <S.Main role="main">
        {hasFilms && (
          <S.ButtonArea>
            <PageSelect
              page={page}
              pageNumber={data.pageNumber}
              handlePage={setPage}
            />
          </S.ButtonArea>
        )}

        {error && (
          <S.ErrorArea role="alert" aria-live="polite">
            Ocorreu um erro na requisição, tente em outro momento!
          </S.ErrorArea>
        )}

        <S.ResultsArea>
          {hasFilms
            ? filmCards
            : !loading && !error && <p>Nenhum filme encontrado.</p>}
        </S.ResultsArea>
      </S.Main>

      {loading && (
        <S.LoadingArea
          role="status"
          aria-live="polite"
          aria-label="Carregando filmes"
        >
          <MoonLoader color={theme.colors.blue} size={50} />
        </S.LoadingArea>
      )}
    </>
  )
}

export default Home
