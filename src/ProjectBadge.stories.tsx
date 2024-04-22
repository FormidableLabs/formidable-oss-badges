import { ComponentStory } from "@storybook/react"
import ProjectBadge from "./ProjectBadge"

export default {
  title: "ProjectBadge",
  component: ProjectBadge,
}

const Template: ComponentStory<typeof ProjectBadge> = args => (
  <ProjectBadge style={{ width: 250 }} {...args} />
)

export const ReactLiveBadge = Template.bind({})
ReactLiveBadge.args = {
  abbreviation: "Re",
  description: "React Live",
  color: "skyblue",
  simple: false,
}

const BannerTemplate: ComponentStory<typeof ProjectBadge> = args => (
  <ProjectBadge {...args} />
)

export const ReactNativeBadge = BannerTemplate.bind({})
ReactNativeBadge.args = {
  abbreviation: "Re",
  description: "React Native",
  color: "skyblue",
  simple: true,
  x: "40",
  y: "160",
  width: "200",
  height: "200",
}
