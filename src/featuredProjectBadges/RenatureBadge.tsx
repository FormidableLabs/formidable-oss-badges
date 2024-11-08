import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Renature from "../assets/featuredLogos/renature.svg"
import RenatureSimple from "../assets/featuredLogos/renature-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const RenatureBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? RenatureSimple : Renature

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
