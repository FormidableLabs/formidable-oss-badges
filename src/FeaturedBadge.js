import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import featuredLogos from "./assets/featuredLogos";

const FeaturedBadge = ({ name, className, isHoverable }) => {
  const Logo = featuredLogos[name.toLowerCase()];
  if (!Logo) return null;
  const StyledLogo = styled(({ isHoverable, ...rest }) => <Logo {...rest} />)`
    ${({ isHoverable }) =>
      isHoverable &&
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
    }`}
  `;
  return <StyledLogo className={className} isHoverable={isHoverable} />;
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
};

FeaturedBadge.defaultProps = {
  className: "",
  isHoverable: false,
};

export default FeaturedBadge;
