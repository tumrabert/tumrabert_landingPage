import React from "react";
import Title from "./textComponents/Title";

interface Certificate {
  title: string;
  description: string;
  url: string;
}
interface Props {
  certificates: Certificate[];
}

const Certificates: React.FC<Props> = ({ certificates }) => {
  return (
    <div className="certificates">
      <Title>Certificates</Title>
      <ul className="text-left list-disc pl-8 mt-5">
        {certificates.map((certificate, index) => (
          <li key={index}>
            <div className="flex">
                <a href={certificate.url} target="_blank" rel="noreferrer" className="flex-0 text-left">
                <strong>{certificate.title}</strong>
                </a>
                </div>

            <li style={{ marginLeft: "20px" }}>{certificate.description}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
