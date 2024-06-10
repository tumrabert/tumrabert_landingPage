// app/resume/page.tsx
import React, { Suspense } from "react";
import Header from "../components/Header";
import Spinner from "../components/Spinner/Spinner";
import profileData from "../../public/data/profile.json"; // Simulating server-side data

// Server Component: Fetches data on the server and passes it to the client
export default function Page() {
  const data = profileData; // Server-side data fetching

  return (
    <div className="bg-white">
      <style lang="postcss">
        {`
          main {
            overflow-x: hidden;
          }
          a {
            text-decoration: underline;
          }
          .text-center > * {
            margin-top: 20px;
          }
          section h2 {
            @apply font-semibold;
          }
          section hr {
            @apply mt-0 mb-2;
            border-color: darkgrey;
            height:3px;
          }
          :global(.print-only) {
            display: none;
          }
          @media print {
            * {
              @apply text-xs;
            }
            :global(.print-only) {
              display: inherit;
            }
            :global(.web-only) {
              display: none;
            }
            ul {
              @apply pl-6;
            }
            section {
              @apply my-2;
            }
            section hr {
              @apply mt-0 mb-1;
            }
            main {
              margin: 0 0;
              padding: 0;
            }
          }
        `}
      </style>
      <Header sourceLink={data.resumeUrl.sourceLink} />
      <Suspense fallback={<Spinner />}>
        <MainContent data={data} />
      </Suspense>
    </div>
  );
}

// Client Component: Defers to render content
const MainContent = React.lazy(() => import("../components/MainContent"));
