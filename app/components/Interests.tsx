import React from "react";

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
      <h2 className="text-2xl print:text-4xl uppercase text-left font-bold">
        Interests
      </h2>
      <hr />
      <ul className="text-left list-disc pl-8 mt-3">
        {interests.map((interest, index) => (
          <li key={index}>
            <span className="w-28 inline-block">{interest.title}:</span>
            <span>{interest.details.join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
