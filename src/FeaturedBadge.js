import React from "react";
import PropTypes from "prop-types";
import featuredLogos from "./assets/featuredLogos";

const FeaturedBadge = ({ name, className }) => {
  const Logo = featuredLogos[name.toLowerCase()];
  if (!Logo) return null;
  return <Logo className={className} />;
};

FeaturedBadge.propTypes = {
  name: (props, propName) => {
    const propHasFeaturedLogo = Object.keys(featuredLogos).some(logoName => {
      const reg = new RegExp(props[propName], "i");
      return logoName.match(reg);
    });
    if (!propHasFeaturedLogo) {
      throw new Error("The supplied name must match one of the featured logos");
    }
  },
  className: PropTypes.string
};

FeaturedBadge.defaultProps = {
  className: ""
};

export default FeaturedBadge;
