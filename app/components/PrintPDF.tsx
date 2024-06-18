"use client"; 
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import profileData from "../../public/data/profile.json";
import MainContent from "./MainContent";  

export const PrintPDF = () => {
  const data = profileData;
  const componentRef = useRef<HTMLDivElement | null>(null);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  const pageStyle = `{ size: 2.5in 4in }`;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle : `${data.intro.name}_Resume_${formattedDate}.pdf`,
    pageStyle:pageStyle
  });

  return (
    <div>
      <div style={{ display: 'none' }}>
        <MainContent ref={componentRef} data={data} />
      </div>
      <button class="button-54" role="button" onClick={handlePrint}>Print this out here!</button>
    </div>
  );
};