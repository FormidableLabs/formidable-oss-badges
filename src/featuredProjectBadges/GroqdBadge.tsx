import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Groqd from "../assets/featuredLogos/groqd.svg"
import GroqdSimple from "../assets/featuredLogos/groqd-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const GroqdBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? GroqdSimple : Groqd

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
