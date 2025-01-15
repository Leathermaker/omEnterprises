import React from 'react';

interface XpaddingWrapperProps {
  children: React.ReactNode;
  className?: string; // Use `className` instead of `class`
}

const XpaddingWrapper: React.FC<XpaddingWrapperProps> = ({ children, className }) => {
  return (
    <div className={`px-4 lg:px-24 ${className || ''}`}>
      {children}
    </div>
  );
};

export default XpaddingWrapper;