import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import * as featuredLogos from "./assets/featuredLogos"
import styles from "./styles.module.css"

type Props = SVGProps<SVGElement> & {
  name: Exclude<keyof typeof featuredLogos.default, `${string}Simple`>
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

const FeaturedBadge = ({
  name,
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const keyName = simple ? `${name.toLowerCase()}Simple` : name.toLowerCase()
  const Logo =
    featuredLogos.default[keyName as keyof typeof featuredLogos.default]
  if (!Logo) return null

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}

export default FeaturedBadge
