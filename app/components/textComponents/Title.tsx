// components/Heading.tsx
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

const Title: React.FC<HeadingProps> = ({ children }) => {
  return (<>
  <h2 className="text-2xl print:text-2xl uppercase text-left font-bold">
      {children}
    </h2>
    <hr />
    </>
    
  );
};

export default Title;