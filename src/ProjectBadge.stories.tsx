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
  abbreviation: "RL",
  description: "React Live",
  color: "skyblue",
}
