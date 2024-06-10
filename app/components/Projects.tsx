import React from "react";

interface Project {
  name: string;
  details: string[];
  url: string;
}
interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="projects">
      <h2 className="text-2xl print:text-4xl uppercase text-left font-bold">
        Projects
      </h2>
      <hr />

      <ul className="text-left list-disc pl-8 mt-5">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="flex">
              <strong className="flex-0 text-left">{project.name}</strong>

              {project.url !== "" && (
                <div className="flex-1 text-right">
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: "20px" }}
                  >
                    {project.url}
                  </a>
                </div>
              )}
            </div>

            {/* Details as separate lis */}
            <ul className="list-disc pl-4" style={{ paddingLeft: "20px" }}>
              {/* Add nested ul with padding */}
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
