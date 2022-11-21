import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Logo } from "."

export default {
  title: "Logo",
  component: Logo,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = () => <Logo />
