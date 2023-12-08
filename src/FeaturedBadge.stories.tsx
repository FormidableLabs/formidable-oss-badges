import { ComponentStory } from "@storybook/react"
import FeaturedBadge from "./FeaturedBadge"

export default {
  title: "FeaturedBadge",
  component: FeaturedBadge,
}

const Template: ComponentStory<typeof FeaturedBadge> = args => (
  <FeaturedBadge style={{ width: 250 }} {...args} />
)

export const Spectacle = Template.bind({})
Spectacle.args = { name: "spectacle" }

export const Groqd = Template.bind({})
Groqd.args = { name: "groqd" }

export const Nuka = Template.bind({})
Nuka.args = { name: "nuka" }

export const ReactNativeOwl = Template.bind({})
ReactNativeOwl.args = { name: "owl" }

export const Victory = Template.bind({})
Victory.args = { name: "victory" }

export const Urql = Template.bind({})
Urql.args = { name: "urql" }

export const Envy = Template.bind({})
Envy.args = { name: "envy" }

export const FigLog = Template.bind({})
FigLog.args = { name: "figlog" }
