import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Envy from "../assets/featuredLogos/envy.svg"
import EnvySimple from "../assets/featuredLogos/envy-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const EnvyBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? EnvySimple : Envy

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
