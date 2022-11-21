import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../src/styles/GlobalStyles"
import { theme } from "../src/styles/theme"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: {
  //   default: "dark",
  //   values: [
  //     {
  //       name: "light",
  //       value: theme.colors.darkGray,
  //     },
  //     {
  //       name: "dark",
  //       value: theme.colors.mainBg,
  //     },
  //   ],
  // },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
]
