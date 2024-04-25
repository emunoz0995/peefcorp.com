import React from 'react';

const BtnCircle = ({ children, btnAction }) => {
  return (
    <button
      onClick={btnAction}
      className=" text-gray-500 hover:text-gray-700 flex h-full w-full items-center content-center gap-3"
    >
      {children}
    </button>
  );
};

export default BtnCircle;
