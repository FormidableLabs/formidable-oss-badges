import * as featuredLogos from "./assets/featuredLogos"

export { default as ProjectBadge } from "./ProjectBadge"
export { default as FeaturedBadge } from "./FeaturedBadge"
export * from "./featuredProjectBadges"

export const featuredBadgeNames = Object.keys(featuredLogos.default)
export type FeaturedBadgeNames = keyof typeof featuredLogos.default
