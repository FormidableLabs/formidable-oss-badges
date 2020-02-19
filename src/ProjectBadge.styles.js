import styled, { keyframes } from "styled-components";

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
