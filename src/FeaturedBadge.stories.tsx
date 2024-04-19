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
Spectacle.args = { name: "spectacle", simple: false }

export const Groqd = Template.bind({})
Groqd.args = { name: "groqd", simple: false }

export const Nuka = Template.bind({})
Nuka.args = { name: "nuka", simple: false }

export const ReactNativeOwl = Template.bind({})
ReactNativeOwl.args = { name: "owl", simple: false }

export const Victory = Template.bind({})
Victory.args = { name: "victory", simple: false }

export const Urql = Template.bind({})
Urql.args = { name: "urql", simple: false }

export const Envy = Template.bind({})
Envy.args = { name: "envy", simple: false }

export const FigLog = Template.bind({})
FigLog.args = { name: "figlog", simple: false }

export const CloudSplice = Template.bind({})
CloudSplice.args = { name: "cloudsplice", simple: false }
