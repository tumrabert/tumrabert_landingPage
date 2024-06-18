// components/MainContent.tsx
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
  id: string;
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

// MainContent Component
const MainContent = React.forwardRef<HTMLDivElement, MainContentProps>((props, ref) => {
  // Destructuring props for cleaner access
  const { data } = props;

  return (
    <div ref={ref} className="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
      <Intro intros={data.intro} />
      <Technologies technologies={data.technologies} />
      <Education educations={data.educations} />
      <Work workExperiences={data.workExperiences} />
      <Projects projects={data.projects} />
      <Certificates certificates={data.certificates} />
      <Interests interests={data.interests} />
    </div>
  );
});

export default MainContent;
