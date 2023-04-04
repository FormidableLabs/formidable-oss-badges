import clsx from "clsx"
import { CSSProperties } from "react"
import * as featuredLogos from "./assets/featuredLogos"
import styles from "./styles.module.css"

type Props = {
  name: keyof typeof featuredLogos.default
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
}

const FeaturedBadge = ({
  name,
  className,
  style,
  isHoverable = true,
}: Props) => {
  const Logo =
    featuredLogos.default[
      name.toLowerCase() as keyof typeof featuredLogos.default
    ]
  if (!Logo) return null

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
    />
  )
}

export default FeaturedBadge
