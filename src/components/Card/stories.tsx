import { ComponentStory, ComponentMeta } from "@storybook/react"

import { FilmCard } from "."

export default {
  title: "FilmCard",
  component: FilmCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FilmCard>

export const Default: ComponentStory<typeof FilmCard> = (args) => (
  <ul>
    <FilmCard {...args} />
    <FilmCard {...args} />
    <FilmCard {...args} />
  </ul>
)

Default.args = {
  title: "Castle in the Sky",
  movieBanner:
    "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  description:
    "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  director: "Hayao Miyazaki",
  producer: "Isao Takahata",
}
