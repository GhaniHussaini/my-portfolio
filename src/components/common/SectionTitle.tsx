import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{children}</span>
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;