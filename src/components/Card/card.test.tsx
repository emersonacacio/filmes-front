import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { act } from "react-dom/test-utils"
import { FilmCard } from "."

const props = {
  title: "Castle in the Sky",
  movieBanner:
    "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  description:
    "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  director: "Hayao Miyazaki",
  producer: "Isao Takahata",
}

describe("< FilmCard />", () => {
  it("Should be rendered with all properties", () => {
    render(<FilmCard {...props}>Test</FilmCard>)

    const title = screen.getByText(`Título: ${props.title}`)
    const director = screen.getByText(`Diretor: ${props.director}`)
    const producer = screen.getByText(`Produtor: ${props.producer}`)
    const image = screen.getByRole("img")
    expect(title).toBeInTheDocument()
    expect(director).toBeInTheDocument()
    expect(producer).toBeInTheDocument()
    expect(image).toHaveAttribute("src", props.movieBanner)
  })
  it("Should display description if button clicked", () => {
    render(<FilmCard {...props}>Test</FilmCard>)

    const description = screen.queryByText(props.description)
    expect(description).not
    const button = screen.getByText("Mostra a descrição")

    act(() => {
      button.click()
    })

    const hideButton = screen.queryByText(props.description)
    const description2 = screen.queryByText("Ocultar a descrição")
    expect(hideButton).toBeInTheDocument()
    expect(description2).toBeInTheDocument()
  })
})
