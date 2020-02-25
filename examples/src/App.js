import React from "react";
import { ProjectBadge, IconBadge } from "formidable-oss-badges";
import FormidableIcon from "./FormidableIcon";
import "./App.css";

const dataForExamples = [
  {
    abbreviation: "No",
    description: "Number",
    color: "#89E"
  },
  {
    abbreviation: "Em",
    description: "Enzyme Matchers",
    color: "#E48055"
  },
  {
    abbreviation: "qq",
    description: "Lowercase Descenders"
  },
  {}
];

const badgesToShow = dataForExamples.map(
  ({ description, abbreviation, number, color }) => (
    <div className="badge-container" key={description || abbreviation}>
      <ProjectBadge
        abbreviation={abbreviation}
        description={description}
        number={number}
        color={color}
      />
      <p>
        abbreviation: {abbreviation} ({typeof abbreviation})<br />
        description: {description} ({typeof description})<br />
        number: {number} ({typeof number}) <br />
        color: {color} ({typeof color})
      </p>
    </div>
  )
);

const App = () => (
  <div className="App">
    {badgesToShow}{" "}
    <div className="badge-container" key="IconBadge">
      <IconBadge color="#ff00ff">
        <FormidableIcon />
      </IconBadge>
      <p>Example of IconBadge using an svg</p>
    </div>
    <div className="badge-container" key="IconBadge">
      <IconBadge color="#90dafa">
        <image
          height="100%"
          width="100%"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        />
      </IconBadge>
      <p>Example of IconBadge using a png</p>
    </div>
    <div className="badge-container" key="IconBadge">
      <ProjectBadge
        abbreviation="R"
        description="React"
        number="09"
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
    <div className="badge-container" key="IconBadge">
      <ProjectBadge description="Victory"></ProjectBadge>
      <p>Example of a Featured ProjectBadge</p>
    </div>
  </div>
);

export default App;
