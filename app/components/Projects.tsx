import React from "react";
import Title from "./textComponents/Title";

interface Project {
  name: string;
  details: string[];
  url: string;
  hide:boolean;
  year: string;
}
interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="projects">
      <Title>Projects</Title>
      <ul className="text-left list-disc pl-8 mt-5">
        {projects.map((project, index) => (

          project.hide ? null :
          (<li key={index}>
            <div className="flex mb-2 font-bold print:mb-1">
            <div className="flex-1 text-left">
                <a href={project.url} target="_blank" rel="noreferrer" className="flex-0 text-left">
                <strong>{project.name}</strong>
                </a>
            </div>
            <div className="flex-1 text-right">
              {project.year ? project.year : ""}
            </div>
            </div>
            {/* Details as separate lis */}
            <ul className="list-disc pl-4" style={{ paddingLeft: "20px" }}>
              {/* Add nested ul with padding */}
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>)
        ))}
      </ul>
    </div>
  );
};

export default Projects;
