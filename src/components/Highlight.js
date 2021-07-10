import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Highlight = ({ label, children }) => {
  return (
    <div css={tw`flex flex-col items-center px-12 py-5 bg-dark-blue-200`}>
      <p css={tw`font-medium`}>{label}</p>
      {children}
    </div>
  );
};

export default Highlight;
