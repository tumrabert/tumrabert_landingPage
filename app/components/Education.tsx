import React from "react";

interface EducationProps {
  degree: string;
  university: string;
  start_year: string;
  end_year: string | null;
  GPAX: string;
}
interface Props {
  educations: EducationProps[];
}

const Education: React.FC<Props> = ({ educations }) => {
  return (
    <div>
      <h2 className="text-2xl print:text-4xl uppercase text-left font-bold">
        Education
      </h2>
      <hr />

      <ul className="text-left list-disc pl-8 mt-3">
        {educations.map((edu, index) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Education;
