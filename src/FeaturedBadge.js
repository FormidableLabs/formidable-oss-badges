import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import featuredLogos from "./assets/featuredLogos";
import smallLogos from "./assets/smallLogos";

const StyledLogo = styled(({ tagName, isHoverable, ...props }) => {
  const Component = tagName || "svg";
  // Do not forward `isHoverable` to DOM
  // This method can be replaced with `styled.svg.withConfig({ shouldForwardProp: ... })`
  // with styled-components@v5.1
  return <Component {...props} />;
})`
  ${(props) =>
    props.isHoverable &&
    `
      .inner-ring,
      .outer-ring {
        transition: 0.3s;
      }
      &:hover .inner-ring {
        opacity: 0.3;
      }
      &:hover .outer-ring {
        opacity: 0.6;
      }
  `}
`;

const FeaturedBadge = ({ name, className, isHoverable, small }) => {
  const Logo = small
    ? smallLogos[name.toLowerCase()]
    : featuredLogos[name.toLowerCase()];
  if (!Logo) return null;

  return (
    <StyledLogo
      tagName={Logo}
      className={className}
      isHoverable={isHoverable}
    />
  );
};

FeaturedBadge.propTypes = {
  name: (props, propName) => {
    const propHasFeaturedLogo = Object.keys(featuredLogos).some((logoName) => {
      const reg = new RegExp(props[propName], "i");
      return logoName.match(reg);
    });
    if (!propHasFeaturedLogo) {
      throw new Error("The supplied name must match one of the featured logos");
    }
  },
  className: PropTypes.string,
  isHoverable: PropTypes.bool,
  small: PropTypes.bool,
};

FeaturedBadge.defaultProps = {
  className: "",
  isHoverable: false,
  small: false,
};

export default FeaturedBadge;
