import clsx from "clsx"
import { CSSProperties, SVGProps } from "react"
import CloudSplice from "../assets/featuredLogos/cloudsplice.svg"
import CloudSpliceSimple from "../assets/featuredLogos/cloudsplice-simple.svg"
import styles from "../styles.module.css"

type Props = SVGProps<SVGElement> & {
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

export const CloudSpliceBadge = ({
  className,
  style,
  isHoverable = true,
  simple = false,
  ...rest
}: Props) => {
  const Logo = simple ? CloudSpliceSimple : CloudSplice

  return (
    <Logo
      className={clsx(isHoverable && styles.hoverableLogo, className)}
      style={style}
      {...rest}
    />
  )
}
