// components/MainContent.tsx
import React from "react";
import Intro from "./Intro";
import Technologies from "./Tech";
import Education from "./Education";
import Work from "./Workexp";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Interests from "./Interests";
import Summary from "./Summary";
import Archievements from "./Archievement";

// Props typing
interface MainContentProps {
  data: {
    intro: any;
    achievements: any;
    technologies: any;
    educations: any;
    workExperiences: any;
    projects: any;
    certificates: any;
    interests: any;
    summary:string;
  };
}

// MainContent Component
const MainContent: React.ForwardRefRenderFunction<HTMLDivElement, MainContentProps> = ({ data }, ref) => {
  return (
    <div ref={ref} className="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
      <Intro intros={data.intro} />
      <Summary summary={data.summary}/>
      <Archievements archievements={data.achievements} />
      <Technologies technologies={data.technologies} />
      <Education educations={data.educations} />
      <Projects projects={data.projects} />
      <Work workExperiences={data.workExperiences} />
      <Certificates certificates={data.certificates} />
      <Interests interests={data.interests} />
    </div>
  );
};

export default React.forwardRef(MainContent);
