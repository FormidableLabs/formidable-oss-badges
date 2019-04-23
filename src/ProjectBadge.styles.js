import styled, { keyframes, createGlobalStyle } from "styled-components";

import BaiJamjureeSemiBold from "../fonts/BaiJamjuree-SemiBold.woff";
import WorkSansSemiBold from "../fonts/WorkSans-SemiBold.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bai Jamjuree Semi Bold";
    src: url(${BaiJamjureeSemiBold});
  }
  
  @font-face {
    font-family: "Work Sans Semi Bold";
    src: url(${WorkSansSemiBold});
  }
`;

export const MiddleRing = styled.path``;
export const InnerRing = styled.path``;

const innerKF = keyframes`
  0% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.1;
  }
  75% {
    opacity: 0.1;
  }
  85% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.4;
  }
`;

const middleKF = keyframes`
  0% {
    opacity: 0.7;
  }
  60% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.4;
  }
  85% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.7;
  }
`;

export const Svg = styled.svg`
  &:hover ${MiddleRing} {
    animation: ${middleKF} 1s;
  }
  &:hover ${InnerRing} {
    animation: ${innerKF} 1s;
  }
`;
