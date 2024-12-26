import * as featuredLogos from "./assets/featuredLogos"
import renatureSVG from "./assets/featuredLogos/renature.svg"
import renatureSimpleSVG from "./assets/featuredLogos/renature-simple.svg"
import victorySVG from "./assets/featuredLogos/victory.svg"
import victorySimpleSVG from "./assets/featuredLogos/victory-simple.svg"
import spectacleSVG from "./assets/featuredLogos/spectacle.svg"
import spectacleSimpleSVG from "./assets/featuredLogos/spectacle-simple.svg"
import urqlSVG from "./assets/featuredLogos/urql.svg"
import urqlSimpleSVG from "./assets/featuredLogos/urql-simple.svg"
import nukaSVG from "./assets/featuredLogos/nuka.svg"
import nukaSimpleSVG from "./assets/featuredLogos/nuka-simple.svg"
import owlSVG from "./assets/featuredLogos/owl.svg"
import owlSimpleSVG from "./assets/featuredLogos/owl-simple.svg"
import groqdSVG from "./assets/featuredLogos/groqd.svg"
import groqdSimpleSVG from "./assets/featuredLogos/groqd-simple.svg"
import envySVG from "./assets/featuredLogos/envy.svg"
import envySimpleSVG from "./assets/featuredLogos/envy-simple.svg"
import figlogSVG from "./assets/featuredLogos/figlog.svg"
import figlogSimpleSVG from "./assets/featuredLogos/figlog-simple.svg"
import cloudspliceSVG from "./assets/featuredLogos/cloudsplice.svg"
import cloudspliceSimpleSVG from "./assets/featuredLogos/cloudsplice-simple.svg"

export { default as ProjectBadge } from "./ProjectBadge"
export { default as FeaturedBadge } from "./FeaturedBadge"
export * from "./featuredProjectBadges"

export type FeaturedBadgeNames = keyof typeof featuredLogos.default

export {
  renatureSVG,
  renatureSimpleSVG,
  victorySVG,
  victorySimpleSVG,
  spectacleSVG,
  spectacleSimpleSVG,
  urqlSVG,
  urqlSimpleSVG,
  nukaSVG,
  nukaSimpleSVG,
  owlSVG,
  owlSimpleSVG,
  groqdSVG,
  groqdSimpleSVG,
  envySVG,
  envySimpleSVG,
  figlogSVG,
  figlogSimpleSVG,
  cloudspliceSVG,
  cloudspliceSimpleSVG,
}
