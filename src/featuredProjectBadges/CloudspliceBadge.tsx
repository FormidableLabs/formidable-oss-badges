import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import Cloudsplice from "../assets/featuredLogos/cloudsplice.svg"
import CloudspliceSimple from "../assets/featuredLogos/cloudsplice-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const CloudspliceBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? CloudspliceSimple : Cloudsplice

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
