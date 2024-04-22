import React, { CSSProperties, Fragment, SVGProps } from "react"
import clsx from "clsx"
import reducerFn from "./reducerFn"
import styles from "./styles.module.css"

const BLACK = "#202020"
const BASE_Y = 58
const includesDescender = (str: string) => RegExp(`[gjpqy]`).test(str)

type Props = SVGProps<SVGSVGElement> & {
  color?: string
  abbreviation: string
  description: string
  children?: React.ReactNode
  className?: string
  isHoverable?: boolean
  style?: CSSProperties
  simple?: boolean
}

const getDescription = (props: Props) => {
  const { abbreviation, description } = props
  if (!description || !description.length) {
    return null
  }
  const descYAxis = includesDescender(abbreviation) ? BASE_Y + 15 : BASE_Y + 11
  const longDesc = description && description.length > 11
  const descriptionArr = description.split(" ").reduce(reducerFn, [])
  return descriptionArr.map((word: string, idx: number) => (
    <text
      key={`description-${idx}`}
      x="50%"
      y={`${descYAxis + (longDesc ? 0 : 2) + idx * 8}%`}
      fontFamily="Helvetica-Bold, Helvetica, sans-serif"
      fontSize={`${longDesc ? "38" : "44"}`}
      fill={BLACK}
      fontWeight="bold"
      letterSpacing={longDesc ? 0.5 : 1}
      textAnchor="middle"
    >
      {word.toUpperCase()}
    </text>
  ))
}

const ProjectBadge = (props: Props) => {
  const {
    color = "#FFFFFF",
    abbreviation,
    children,
    className,
    style,
    isHoverable = true,
    simple = false,
    description,
    ...rest
  } = props
  let baseY = BASE_Y
  if (simple) {
    baseY = 64
  }
  const abbrYAxis = includesDescender(abbreviation) ? baseY : baseY + 2
  return (
    <Fragment>
      <svg
        viewBox="0 0 600 595"
        className={clsx(isHoverable && styles.hoverableLogo, className)}
        style={style}
        {...rest}
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M342.277 9.4l195.971 87.165C575.801 113.268 600 150.515 600 191.616v211.961c0 41.1-24.199 78.348-61.752 95.051l-195.971 87.165a104.029 104.029 0 01-84.554 0L61.752 498.628C24.199 481.925 0 444.678 0 403.578V191.615c0-41.1 24.199-78.348 61.752-95.05L257.723 9.4a104.029 104.029 0 0184.554 0z"
            fill={color}
          />
          <path
            className="inner-ring"
            d="M327.97 42.47a68.877 68.877 0 00-56.109.037l-196.786 87.92c-23.663 10.572-38.9 34.067-38.9 59.985v213.356c0 26.74 15.739 50.973 40.167 61.848l195.557 87.055a68.877 68.877 0 0056.006.008l195.732-87.07c24.437-10.872 40.184-35.11 40.184-61.856v-212.32c0-26.738-15.738-50.972-40.166-61.847L327.97 42.47z"
            strokeOpacity={0.3}
            stroke={BLACK}
            strokeWidth={24.247}
          />
          <path
            className="outer-ring"
            d="M337.399 20.368a92.026 92.026 0 00-74.798 0l-195.97 87.165c-33.221 14.775-54.628 47.725-54.628 84.083v211.961c0 36.358 21.407 69.308 54.627 84.084l195.971 87.164a92.026 92.026 0 0074.798 0l195.97-87.164c33.221-14.776 54.628-47.726 54.628-84.084v-211.96c0-36.359-21.407-69.309-54.627-84.084L337.399 20.368z"
            strokeOpacity={0.6}
            stroke={BLACK}
            strokeWidth={24.007}
          />
          {children ? (
            children
          ) : (
            <text
              fill={BLACK}
              fontFamily="Helvetica, sans-serif"
              fontSize={simple ? 280 : 230}
              letterSpacing={-5.5}
              textAnchor="middle"
              x={simple ? "49%" : "50%"}
              y={`${abbrYAxis}%`}
            >
              {abbreviation}
            </text>
          )}
          {!simple && getDescription(props)}
        </g>
      </svg>
    </Fragment>
  )
}

export default ProjectBadge
