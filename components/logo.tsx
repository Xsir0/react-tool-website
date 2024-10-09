import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.2" />
      <path
        d="M50 10 L90 50 L50 90 L10 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      <circle cx="30" cy="30" r="5" fill="currentColor" />
      <circle cx="70" cy="30" r="5" fill="currentColor" />
      <circle cx="30" cy="70" r="5" fill="currentColor" />
      <circle cx="70" cy="70" r="5" fill="currentColor" />
    </svg>
  );
};

export default Logo;