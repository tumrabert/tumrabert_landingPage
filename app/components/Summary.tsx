import React from "react";
import Title from "./textComponents/Title";
import ReactMarkdown from "react-markdown";

interface Props {
  summary: string;
}


const Summary: React.FC<Props> = ({ summary }) => {
  return (
    <div>
      <Title>Summary</Title>
      <div className="flex-1 text-left print:pl-6 indent-8 mt-3">
      <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Summary;
