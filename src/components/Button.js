import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      css={tw`ring-gray-500 ring-opacity-50 bg-gray-400 duration-200 hover:(ring-4 bg-gray-500)`}
      {...{ className, onClick }}
    >
      {children}
    </button>
  );
};

export default Button;
