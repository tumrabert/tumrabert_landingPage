import React from "react";

interface WorkProps {
  position: string;
  company: string;
  url: string;
  start: string;
  end: string;
  details: string[];
}

interface Props {
  workExperiences: WorkProps[];
}

const Work: React.FC<Props> = ({ workExperiences }) => {
  return (
    <div className="work-experience">
      <h2 className="text-2xl print:text-4xl uppercase text-left font-bold">
        Work Experience
      </h2>
      <hr />

      {workExperiences.map((work, index) => (
        <>
          <div key={index} className="flex font-bold mb-2 print:mb-1 mt-3">
            <div className="flex-1 text-left">{work.position}</div>
            <div className="flex-0">
              <a href={work.url} target="_blank" rel="noreferrer">
                {work.company}
              </a>
            </div>
            <div className="flex-1 text-right">
              {work.start} - {work.end === null ? "Present" : work.end}
            </div>
          </div>
          <ul className="text-left list-disc pl-8 print:pl-6 mt-3">
            {work.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Work;
