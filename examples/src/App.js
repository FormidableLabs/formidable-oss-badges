import React from "react";
import { ProjectBadge } from "formidable-oss-badges";
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
  return <div className="App">{badgesToShow}</div>;
}

export default App;
