import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Logo } from "."

describe("< Logo />", () => {
  it("Should have the specified style", () => {
    render(<Logo />)

    const leftText = screen.getByText("Films")
    expect(leftText).toHaveStyle({
      "background-color": "#1a73e8",
      "font-weight": "600",
      color: "#FAFAFA",
      padding: "0.5rem",
    })
    const rightText = screen.getByText("API")
    expect(rightText).toHaveStyle({
      "font-weight": "600",
      color: "#1a73e8",
      padding: "0.5rem",
    })
  })
})
