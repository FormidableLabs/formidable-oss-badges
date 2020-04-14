import React from "react";
import { ProjectBadge, IconBadge, FeaturedBadge } from "formidable-oss-badges";
import FormidableIcon from "./FormidableIcon";
import "./App.css";

const dataForExamples = [
  {
    abbreviation: "Rp",
    description: "runpkg",
    color: "#89E"
  },
  {
    abbreviation: "Rn",
    description: "react native app auth",
    color: "#E48055"
  },
  {
    abbreviation: "Ec",
    description: "eslint config react native a11y"
  },
  {}
];

const badgesToShow = dataForExamples.map(
  ({ description, abbreviation, color }, idx) => (
    <div className="badge-container" key={description || abbreviation || idx}>
      <ProjectBadge
        abbreviation={abbreviation}
        description={description}
        color={color}
      />
      <p>
        abbreviation: {abbreviation} ({typeof abbreviation})<br />
        description: {description} ({typeof description})<br />
        color: {color} ({typeof color})
      </p>
    </div>
  )
);

const App = () => (
  <div className="App">
    {badgesToShow}{" "}
    <div className="badge-container">
      <IconBadge color="#ff00ff">
        <FormidableIcon />
      </IconBadge>
      <p>Example of IconBadge using an svg</p>
    </div>
    <div className="badge-container">
      <IconBadge color="#90dafa">
        <image
          height="100%"
          width="100%"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        />
      </IconBadge>
      <p>Example of IconBadge using a png</p>
    </div>
    <div className="badge-container">
      <ProjectBadge
        abbreviation="R"
        description="React"
        color="#FFFFFF"
      >
        <image
          width="70%"
          height="70%"
          x="15%"
          y="10%"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        />
      </ProjectBadge>
      <p>Example of ProjectBadge using a png</p>
    </div>
    <div className="badge-container">
      <FeaturedBadge name="urql"></FeaturedBadge>
      <p>urql ProjectBadge</p>
    </div>
    <div className="badge-container">
      <FeaturedBadge name="victory"></FeaturedBadge>
      <p>victory ProjectBadge</p>
    </div>
    <div className="badge-container">
      <FeaturedBadge name="renature"></FeaturedBadge>
      <p>renature ProjectBadge</p>
    </div>
    <div className="badge-container">
      <FeaturedBadge name="spectacle"></FeaturedBadge>
      <p>Spectacle ProjectBadge</p>
    </div>
  </div>
);

export default App;
