import React from "react";
import Title from "./textComponents/Title";
interface Interest {
  title: string;
  details: string[];
}

interface Props {
  interests: Interest[];
}

const Interests: React.FC<Props> = ({ interests }) => {
  return (
    <div>
      
      <Title>Interests</Title>
      <ul className="text-left list-disc pl-8 mt-3">
        {interests.map((interest, index) => (
          <li key={index} className="flex gap-1 items-start">
          <span className="w-[25%] font-bold inline-block">{interest.title}</span>
          <span className="flex-1">{interest.details.join(", ")}</span>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
