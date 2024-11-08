import { ComponentStory } from "@storybook/react"
import {
  CloudSpliceBadge,
  EnvyBadge,
  FigLogBadge,
  GroqdBadge,
  NukaBadge,
  OwlBadge,
  RenatureBadge,
  SpectacleBadge,
  UrqlBadge,
  VictoryBadge,
} from "."

export default {
  title: "FeaturedProjectBadges",
}

export const CloudSplice: ComponentStory<typeof CloudSpliceBadge> = args => (
  <CloudSpliceBadge style={{ width: 250 }} {...args} />
)
CloudSplice.args = { isHoverable: true, simple: false }

export const Envy: ComponentStory<typeof EnvyBadge> = args => (
  <EnvyBadge style={{ width: 250 }} {...args} />
)
Envy.args = { isHoverable: true, simple: false }

export const FigLog: ComponentStory<typeof FigLogBadge> = args => (
  <FigLogBadge style={{ width: 250 }} {...args} />
)
FigLog.args = { isHoverable: true, simple: false }

export const Groqd: ComponentStory<typeof GroqdBadge> = args => (
  <GroqdBadge style={{ width: 250 }} {...args} />
)
Groqd.args = { isHoverable: true, simple: false }

export const Nuka: ComponentStory<typeof NukaBadge> = args => (
  <NukaBadge style={{ width: 250 }} {...args} />
)
Nuka.args = { isHoverable: true, simple: false }

export const Owl: ComponentStory<typeof OwlBadge> = args => (
  <OwlBadge style={{ width: 250 }} {...args} />
)
Owl.args = { isHoverable: true, simple: false }

export const Renature: ComponentStory<typeof RenatureBadge> = args => (
  <RenatureBadge style={{ width: 250 }} {...args} />
)
Renature.args = { isHoverable: true, simple: false }

export const Spectacle: ComponentStory<typeof SpectacleBadge> = args => (
  <SpectacleBadge style={{ width: 250 }} {...args} />
)
Spectacle.args = { isHoverable: true, simple: false }

export const Urql: ComponentStory<typeof UrqlBadge> = args => (
  <UrqlBadge style={{ width: 250 }} {...args} />
)
Urql.args = { isHoverable: true, simple: false }

export const Victory: ComponentStory<typeof VictoryBadge> = args => (
  <VictoryBadge style={{ width: 250 }} {...args} />
)
Victory.args = { isHoverable: true, simple: false }
