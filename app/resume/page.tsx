// app/resume/page.tsx
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Tumrabert Resume',
  description: 'The Resume of Tanakit Phenntun(tumrabert)',
};
import React, { Suspense } from "react";
import Header from "../components/Header";
import Spinner from "../components/Spinner/Spinner";
import profileData from "../../public/data/profile.json"; // Simulating server-side data
// Server Component: Fetches data on the server and passes it to the client
export default function Page() {
  const data = profileData; // Server-side data fetching
  return (
    <div className="bg-white text-black">
      <Header sourceLink={data.resumeUrl.sourceLink} />
      <Suspense fallback={<Spinner />}>
        <MainContent  data={data} />
      </Suspense>
    </div>
  );
}

// Client Component: Defers to render content
const MainContent = React.lazy(() => import("../components/MainContent"));
