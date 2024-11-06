import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import FigLog from "../assets/featuredLogos/figlog.svg"
import FigLogSimple from "../assets/featuredLogos/figlog-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const FigLogBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? FigLogSimple : FigLog

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
