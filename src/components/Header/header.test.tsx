import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Header } from "."

describe("< Header />", () => {
  it("Should have the specified style", () => {
    render(<Header />)

    const wrapper = screen.getByLabelText("Header da aplicação")
    expect(wrapper).toHaveStyle({
      "text-align": "center",
      padding: "1rem 0 1rem 0",
      "box-shadow": "0 0.5rem 0.3rem rgba(0,0,0,0.2)",
      "margin-bottom": "1rem",
    })
  })
})
