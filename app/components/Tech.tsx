import React from "react";
import Title from "./textComponents/Title";
interface Technology {
  section: string;
  details: string[];
}

interface Props {
  technologies: Technology[];
}

const Technologies: React.FC<Props> = ({ technologies }) => {
  return (
    <div>
      <Title>Technologies and Languages</Title>
      <ul className="text-left list-disc pl-8 mt-3">
        {technologies.map((tech, index) => (
          <li key={index}>
            <span className="w-[30%] inline-block"><strong>{tech.section}</strong></span>
            <span>{tech.details.join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
