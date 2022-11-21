import { FilmCard } from "components/Card"
import { Header } from "components/Header"
import { PageSelect } from "components/PageSelect"
import { useData } from "hooks/useData"

import * as S from "./styles"

function Home(): JSX.Element {
  const { data, error, page, setPage } = useData()
  return (
    <>
      <Header />
      <S.Main>
        <S.ButtonArea>
          <PageSelect
            page={page}
            pageNumber={data.pageNumber}
            handlePage={setPage}
          />
        </S.ButtonArea>

        {error && (
          <S.ErrorArea>
            Ocorreu um erro na requisição, tente em outro momento!
          </S.ErrorArea>
        )}
        <S.ResultsArea>
          {data.films.map((film) => (
            <FilmCard
              key={film.id}
              title={film.title}
              description={film.description}
              producer={film.producer}
              director={film.director}
              movieBanner={film.movie_banner}
            />
          ))}
        </S.ResultsArea>
      </S.Main>
    </>
  )
}

export default Home
