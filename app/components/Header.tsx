import React from "react";
import Link from "next/link";
interface HeaderProps {
  sourceLink: string;
}

const Header: React.FC<HeaderProps> = ({ sourceLink }) => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="web-only text-center p-4 sm:p-6 bg-red-600 text-white w-screen">
        <h1 className="text-4xl">Resume</h1>
        <h3>
          <a href="#" className="underline text-lg" /*onClick={handlePrint}*/>
            [Print]
          </a>
        </h3>
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
