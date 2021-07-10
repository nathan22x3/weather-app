import Button from 'components/Button';
import Highlight from 'components/Highlight';
import Weather from 'components/Weather';
import Footer from 'containers/Footer';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import DirectionIcon from 'assets/images/direct-down.svg';
import ProgressBar from 'components/ProgressBar';

const Main = () => {
  return (
    <main css={tw`relative flex flex-col min-h-screen p-12 lg:(px-16 py-10)`}>
      <div css={tw`self-end flex gap-x-3`}>
        <Button css={tw`w-10 h-10 rounded-full p-2`}>&#x2103;</Button>
        <Button css={tw`w-10 h-10 rounded-full p-2`}>&#x2109;</Button>
      </div>
      <div css={tw`grid grid-cols-2 gap-6 my-12 md:grid-cols-3 lg:grid-cols-5`}>
        <Weather date='Tomorrow' state='sl' minTemp={11} maxTemp={16} />
        <Weather date='Sun, 7 Jun' state='sl' minTemp={11} maxTemp={16} />
        <Weather date='Mon, 8 Jun' state='t' minTemp={11} maxTemp={16} />
        <Weather date='Tue, 9 Jun' state='lc' minTemp={11} maxTemp={16} />
        <Weather date='Wed, 10 Jun' state='lr' minTemp={11} maxTemp={16} />
      </div>
      <h2 css={tw`text-2xl font-bold`}>Today’s Hightlights </h2>
      <div css={tw`grid grid-cols-1 gap-6 my-10 md:grid-cols-2`}>
        <Highlight label='Wind status'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>7</span>mph
          </p>
          <div css={tw`flex items-center gap-x-2`}>
            <img
              src={DirectionIcon}
              alt='Wind direction'
              css={tw`transform rotate-45 w-8 h-8 p-2 rounded-full bg-gray-400`}
            />
            <p css={tw`text-sm`}>WSW</p>
          </div>
        </Highlight>
        <Highlight label='Humidity'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>84</span>%
          </p>
          <ProgressBar percent={84} css={tw`w-full`} />
        </Highlight>
        <Highlight label='Visibility'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>6,4</span> miles
          </p>
        </Highlight>
        <Highlight label='Air Pressure'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>998</span> mb
          </p>
        </Highlight>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
