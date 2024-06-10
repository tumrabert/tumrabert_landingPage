// components/MainContent.tsx
"use client";

import React from "react";
import Intro from "./Intro";
import Technologies from "./Tech";
import Education from "./Education";
import Work from "./Workexp";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Interests from "./Interests";

// Props typing
interface MainContentProps {
  data: {
    intro: any;
    technologies: any;
    educations: any;
    workExperiences: any;
    projects: any;
    certificates: any;
    interests: any;
  };
}

const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <div className="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
      <Intro intros={data.intro} />
      <Technologies technologies={data.technologies} />
      <Education educations={data.educations} />
      <Work workExperiences={data.workExperiences} />
      <Projects projects={data.projects} />
      <Certificates certificates={data.certificates} />
      <Interests interests={data.interests} />
    </div>
  );
};

export default MainContent;
