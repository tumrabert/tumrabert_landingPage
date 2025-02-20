import React from "react";
import Title from "./textComponents/Title";

interface Achievement {
  name: string;
  details: string[];
  year: string;
  url: string;
  hide:boolean; 
}
interface Props {
  archievements: Achievement[];
}

const Archievements: React.FC<Props> = ({ archievements }) => {
  return (
    <div className="projects">
      <Title>Achievements</Title>
      <ul className="text-left list-disc pl-8 mt-5">
        {archievements.map((archievement, index) => (

archievement.hide ? null :
          (<li key={index}>
            <div className="flex mb-2 font-bold print:mb-1">
            <div className="flex-1 text-left">
                <a href={archievement.url} target="_blank" rel="noreferrer" className="flex-0 text-left">
                <strong>Winner : {archievement.name}</strong>
                </a>
            </div>
            <div className="flex-1 text-right">
              {archievement.year ? archievement.year : ""}
            </div>
            </div>
            {/* Details as separate lis */}
            <ul className="list-disc pl-4" style={{ paddingLeft: "20px" }}>
              {/* Add nested ul with padding */}
              {archievement.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>)
        ))}
      </ul>
    </div>
  );
};

export default Archievements;
