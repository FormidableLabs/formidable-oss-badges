import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Owl from "../assets/featuredLogos/owl.svg"
import OwlSimple from "../assets/featuredLogos/owl-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const OwlBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? OwlSimple : Owl

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
