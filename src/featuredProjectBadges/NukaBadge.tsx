import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Nuka from "../assets/featuredLogos/nuka.svg"
import NukaSimple from "../assets/featuredLogos/nuka-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const NukaBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? NukaSimple : Nuka

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
