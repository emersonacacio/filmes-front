import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Button } from "."

describe("< Button />", () => {
  it("Should have the specified style", () => {
    render(<Button>Test</Button>)

    const button = screen.getByText("Test")
    expect(button).toHaveStyle({
      "background-color": "#030517",
      "text-align": "center",
      color: "#FAFAFA",
      "font-weight": 600,
      padding: "0.5rem",
      "border-radius": "0.3rem",
      "box-shadow": "0px 5px 8px rgba(0,0,0,0.5)",
      cursor: "pointer",
    })

    expect(button).toHaveStyleRule("opacity", "0.5", {
      modifier: ":disabled",
    })
  })
})
