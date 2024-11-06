import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Spectacle from "../assets/featuredLogos/spectacle.svg"
import SpectacleSimple from "../assets/featuredLogos/spectacle-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const SpectacleBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? SpectacleSimple : Spectacle

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
