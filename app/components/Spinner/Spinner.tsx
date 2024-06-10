// components/Spinner.tsx
"use client";  // Ensures this is a client-side component

import { ClipLoader } from "react-spinners";

// Define the Props interface for type-checking
type SpinnerProps = {
  isLoading?: boolean; // Make isLoading optional
};

// Functional component to show the spinner
const Spinner: React.FC<SpinnerProps> = ({ isLoading = true }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="grey"
        loading={isLoading}
        size={150}
        aria-label="Loading spinner"
      />
    </div>
  );
};

export default Spinner;
