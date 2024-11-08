import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Urql from "../assets/featuredLogos/urql.svg"
import UrqlSimple from "../assets/featuredLogos/urql-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const UrqlBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? UrqlSimple : Urql

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
