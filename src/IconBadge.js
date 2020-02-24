import React from "react";

import { Svg } from "./ProjectBadge.styles";

//  IconBadge accepts any children, you will need to position via the passed child

const IconBadge = ({ color = "#202020", className, children }) => {
  return (
    <React.Fragment>
      <Svg viewBox="0 0 600 595">
        <g fill="none" fillRule="evenodd">
          <path
            d="M342.277 9.4l195.971 87.165C575.801 113.268 600 150.515 600 191.616v211.961c0 41.1-24.199 78.348-61.752 95.051l-195.971 87.165a104.029 104.029 0 01-84.554 0L61.752 498.628C24.199 481.925 0 444.678 0 403.578V191.615c0-41.1 24.199-78.348 61.752-95.05L257.723 9.4a104.029 104.029 0 0184.554 0z"
            fill="#1F1F1F"
          />
          <path
            d="M337.399 20.368a92.026 92.026 0 00-74.798 0l-195.97 87.165c-33.221 14.775-54.628 47.725-54.628 84.083v211.961c0 36.358 21.407 69.308 54.627 84.084l195.971 87.164a92.026 92.026 0 0074.798 0l195.97-87.164c33.221-14.776 54.628-47.726 54.628-84.084v-211.96c0-36.359-21.407-69.309-54.627-84.084L337.399 20.368z"
            strokeOpacity={0.6}
            stroke={color}
            strokeWidth={24.007}
          />
          {children}
        </g>
      </Svg>
    </React.Fragment>
  );
};

export default IconBadge;
