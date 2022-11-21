import { FilmCard } from "components/Card"
import { Header } from "components/Header"
import { useData } from "hooks/useData"

import * as S from "./styles"

function Home(): JSX.Element {
  const { data, error } = useData()
  return (
    <>
      <Header />
      <S.Main>
        {/* <S.InputArea>
          <Input
            value={keyword}
            onChange={handleChangeKeyword}
            title="Palavra chave"
            errorMessage="Voçê precisa digitar a palavra chave"
            isError={isErrorKeyword}
          />
          <Input
            value={startData}
            type="date"
            title="Data inicial"
            onChange={handleStartData}
            errorMessage="Voçê precisa digitar a data inicial"
            isError={isErrorStartData}
          />
          <Input
            type="date"
            value={endData}
            onChange={handleEndData}
            title="Data Final"
            errorMessage="Voçê precisa digitar a data final"
            isError={isErrorEndData}
          />
          <Button onClick={handleClickSearch}>Pesquisar</Button>
        </S.InputArea> */}
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
