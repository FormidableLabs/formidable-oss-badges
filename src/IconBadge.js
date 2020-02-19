import React from "react";

import { Svg } from "./ProjectBadge.styles";

//  IconBadge accepts any children, you will need to position it youself

const IconBadge = ({ color = "#FFFFFF", className, children }) => {
  return (
    <React.Fragment>
      <Svg viewBox="0 0 380 374" className={className}>
        <defs>
          <filter
            x="-25.7%"
            y="-25.2%"
            width="151.3%"
            height="150.3%"
            filterUnits="objectBoundingBox"
            id="Badge_Copy_svg__a"
          >
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              stdDeviation={20}
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g
          filter="url(#Badge_Copy_svg__a)"
          transform="translate(40 34)"
          x="0"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M170.918 9.364l97.823 43.419a52 52 0 0 1 30.904 47.528V205.69a52 52 0 0 1-30.904 47.528l-97.823 43.42a52 52 0 0 1-42.192 0l-97.822-43.42A52 52 0 0 1 0 205.689V100.31a52 52 0 0 1 30.904-47.528l97.822-43.42a52 52 0 0 1 42.192 0z"
            fill="#202020"
          />
          <path
            d="M166.05 20.332a40 40 0 0 0-32.455 0l-97.823 43.42A40 40 0 0 0 12 100.311v105.377a40 40 0 0 0 23.772 36.56l97.823 43.42a40 40 0 0 0 32.455 0l97.822-43.42a40 40 0 0 0 23.773-36.56V100.31a40 40 0 0 0-23.773-36.56l-97.822-43.42zm4.868-10.968l97.823 43.419a52 52 0 0 1 30.904 47.528V205.69a52 52 0 0 1-30.904 47.528l-97.823 43.42a52 52 0 0 1-42.192 0l-97.822-43.42A52 52 0 0 1 0 205.689V100.31a52 52 0 0 1 30.904-47.528l97.822-43.42a52 52 0 0 1 42.192 0z"
            fill={color}
            fillRule="nonzero"
          />
          {children}
        </g>
      </Svg>
    </React.Fragment>
  );
};

export default IconBadge;
