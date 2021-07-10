import CloudImage from 'assets/images/cloud-background.png';
import GpsIcon from 'assets/images/gps.svg';
import LocationIcon from 'assets/images/location.svg';
import ShowerImage from 'assets/images/s.png';
import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Sidebar = () => {
  return (
    <aside
      css={tw`overflow-hidden relative flex flex-col items-center min-h-screen px-11 py-12 bg-dark-blue-200`}
    >
      <div css={tw`flex justify-between self-stretch mb-16 md:mb-28`}>
        <Button css={tw`px-4 py-3 rounded-md text-gray-100`}>
          Search for places
        </Button>
        <Button css={tw`w-10 h-10 rounded-full p-2`}>
          <img src={GpsIcon} alt='Request location' />
        </Button>
      </div>
      <div css={tw`flex-1 flex flex-col justify-between items-center`}>
        <img
          src={CloudImage}
          alt='Cloud background'
          css={tw`absolute max-w-none top-[10%] opacity-10 2xl:max-w-full`}
        />
        <img src={ShowerImage} alt='Shower' />
        <p css={tw`font-medium`}>
          <span css={tw`text-9xl`}>15</span>
          <span css={tw`text-4xl text-gray-200`}>&#xb0;C</span>
        </p>
        <p css={tw`text-4xl text-gray-200`}>Shower</p>
        <p css={tw`text-lg text-gray-200`}>Today • Fri, 5 Jun</p>
      </div>
      <p css={tw`flex items-center gap-x-2 mt-8`}>
        <img src={LocationIcon} alt='Your location:' /> Helsinki
      </p>
    </aside>
  );
};

export default Sidebar;
