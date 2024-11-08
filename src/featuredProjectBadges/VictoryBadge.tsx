import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Victory from "../assets/featuredLogos/victory.svg"
import VictorySimple from "../assets/featuredLogos/victory-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const VictoryBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? VictorySimple : Victory

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
