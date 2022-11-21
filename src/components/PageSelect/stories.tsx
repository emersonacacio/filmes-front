import { ComponentStory, ComponentMeta } from "@storybook/react"

import { PageSelect } from "."

export default {
  title: "PageSelect",
  component: PageSelect,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageSelect>

export const Default: ComponentStory<typeof PageSelect> = (args) => (
  <PageSelect {...args} />
)

Default.args = { page: 1, pageNumber: 10 }
