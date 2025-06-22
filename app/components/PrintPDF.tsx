"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import profileData from "../../public/data/profile.json";
import MainContent from "./MainContent";

export const PrintPDF = () => {
  const data = profileData;
  const componentRef = useRef<HTMLDivElement | null>(null);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const pageStyle = `
    @page {
      size: A4;
      margin: 0.4in;
    }
    @media print {
      html {
        background: white !important;
      }
      body {
        background: white !important;
        margin: 0;
        padding: 0;
        transform: scale(0.7);
        transform-origin: top left;
        width: 142.86%;
        height: 142.86%;
        overflow: visible;
      }
      .print-container {
        background-color: white !important;
        width: 100% !important;
        height: 100% !important;
      }
    }
  `;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.intro.name}_Resume_${formattedDate}.pdf`,
    pageStyle: pageStyle,
  });

  return (
    <div>
      <div style={{ display: "none" }}>
        <div className="print-container">
          <MainContent ref={componentRef} data={data} />
        </div>
      </div>
      <button className="button-54" role="button" onClick={handlePrint}>
        Print this out here!
      </button>
    </div>
  );
};
