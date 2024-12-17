import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import AMA from "../assets/featuredLogos/ama.svg"
import AMASimple from "../assets/featuredLogos/ama-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const AMABadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? AMASimple : AMA

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
