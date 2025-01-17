import React from "react";
import Title from "./textComponents/Title";

interface EducationProps {
  degree: string;
  university: string;
  start_year: string;
  end_year: string | null;
  GPAX: string;
  details: string[];
}
interface Props {
  educations: EducationProps[];
}

const Education: React.FC<Props> = ({ educations }) => {
  return (
    <div>
      <Title>Education</Title>
      

      <ul className="text-left list-disc pl-8 mt-3">
        {educations.map((edu, index) => (
          <>
          <li key={index}>
            <div className="flex mb-2 font-bold print:mb-1">
              <div className="flex-1 text-left">{edu.degree}</div>
              <div className="flex-1 text-right">
                {edu.start_year} -{" "}
                {edu.end_year === null ? "Present" : edu.end_year}
              </div>
            </div>
            {edu.university}, GPAX: {edu.GPAX}
          </li>
          <ul className="text-left list-disc pl-8 print:pl-6 mt-3">
            {edu.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Education;
