import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Footer = () => (
  <footer
    css={tw`absolute left-0 bottom-0 w-full py-6 text-center font-montserrat text-sm text-gray-200`}
  >
    created by{' '}
    <a
      href='http://github.com/nathan22x3'
      target='_blank'
      rel='noopener noreferrer'
      css={tw`underline font-bold`}
    >
      nathan22x3
    </a>{' '}
    - devChallenges.io
  </footer>
);

export default Footer;
