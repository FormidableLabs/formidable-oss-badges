import React from "react";
import { ProjectBadge, IconBadge } from "formidable-oss-badges";
import FormidableIcon from "./FormidableIcon";
import "./App.css";

const dataForExamples = [
  {
    abbreviation: "Bq",
    description: "Barbeque"
  },
  {
    abbreviation: "Em",
    description: "Enzyme Matchers",
    number: "09",
    color: "#E48055"
  },
  {
    abbreviation: "qq",
    description: "Lowercase Descenders",
    number: 9
  },
  {}
];

const badgesToShow = dataForExamples.map(obj => {
  const { description, abbreviation, number, color } = obj;
  return (
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
  );
});

function App() {
  return (
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
            x="15%"
            y="23%"
            width="50%"
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
          color="#90dafa"
        >
          <image
            x="14%"
            y="20%"
            width="50%"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          />
        </ProjectBadge>
        <p>Example of ProjectBadge using a png</p>
      </div>
    </div>
  );
}

export default App;
