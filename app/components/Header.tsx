'use client';
import React, { useState }  from "react";
import Link from "next/link";
import {PrintPDF} from "./PrintPDF";
interface HeaderProps {
  sourceLink: string;
}

const Header: React.FC<HeaderProps> = ({ sourceLink }) => {
  const [showPDF, setShowPDF] = useState(false);

  const handlePrint = () => {
    setShowPDF(true);
  };
  return (
    <>
      <div className="web-only text-center p-4 sm:p-6 bg-red-600 text-white w-screen">
        < PrintPDF/>
        <p>
          Printer-friendly standard resume, any HTML tags with{" "}
          <code>web-only</code> CSS class will be hidden on print.
        </p>

        <a href={sourceLink} target="_blank" rel="noopener">
          [Source Original Repository]
        </a>
      </div>
    </>
  );
};

export default Header;
