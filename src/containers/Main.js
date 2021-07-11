import DirectionIcon from 'assets/images/direct-up.svg';
import Button from 'components/Button';
import Highlight from 'components/Highlight';
import ProgressBar from 'components/ProgressBar';
import Weather from 'components/Weather';
import Footer from 'containers/Footer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { formatWindDirection } from 'utils';
import {
  getForecast,
  getTemperatureScale,
  setTemperatureScale,
} from 'weatherSlice';

const Main = () => {
  const dispatch = useDispatch();
  const forecast = useSelector(getForecast);
  const scale = useSelector(getTemperatureScale);
  const current = forecast && forecast[0];

  const handleChangeScale = (scale) => dispatch(setTemperatureScale(scale));

  return (
    <main css={tw`relative flex flex-col min-h-screen p-12 lg:(px-16 py-10)`}>
      <div css={tw`self-end flex gap-x-3`}>
        <Button
          css={[
            tw`w-10 h-10 rounded-full p-2 font-bold text-lg bg-dark-blue-100`,
            scale === 'celsius' && tw`bg-gray-100 text-dark-blue-300`,
          ]}
          onClick={() => handleChangeScale('celsius')}
        >
          &#xb0;C
        </Button>
        <Button
          css={[
            tw`w-10 h-10 rounded-full p-2 font-bold text-lg bg-dark-blue-100`,
            scale === 'fahrenheit' && tw`bg-gray-100 text-dark-blue-300`,
          ]}
          onClick={() => handleChangeScale('fahrenheit')}
        >
          &#xb0;F
        </Button>
      </div>
      <div css={tw`grid grid-cols-2 gap-6 my-12 md:grid-cols-3 lg:grid-cols-5`}>
        {forecast &&
          forecast.map(({ dt_txt, weather, main }) => (
            <Weather
              key={dt_txt}
              date={dt_txt}
              state={weather[0].main}
              minTemp={main.temp_min}
              maxTemp={main.temp_max}
            />
          ))}
      </div>
      <h2 css={tw`text-2xl font-bold`}>Today’s Hightlights </h2>
      <div css={tw`grid grid-cols-1 gap-6 my-10 md:grid-cols-2`}>
        <Highlight label='Wind status'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>
              {Math.round(current?.wind.speed) || 0}
            </span>
            mph
          </p>
          <div css={tw`flex items-center gap-x-2`}>
            <img
              src={DirectionIcon}
              alt='Wind direction'
              css={tw`w-8 h-8 p-2 rounded-full bg-gray-400`}
              style={{
                transform: `rotate(${current?.wind.deg || 0}deg)`,
              }}
            />
            <p css={tw`text-sm`}>{formatWindDirection(current?.wind.deg)}</p>
          </div>
        </Highlight>
        <Highlight label='Humidity'>
          <p css={tw`font-medium text-3xl mt-1 mb-7`}>
            <span css={tw`font-bold text-6xl`}>
              {current?.main.humidity || 0}
            </span>
            %
          </p>
          <ProgressBar percent={current?.main.humidity || 0} css={tw`w-full`} />
        </Highlight>
        <Highlight label='Visibility'>
          <p css={tw`mt-1 font-medium text-xl md:text-3xl`}>
            <span css={tw`font-bold text-5xl md:text-6xl`}>
              {(current?.visibility * 0.0006213712)
                .toFixed(2)
                .replace('.', ',') || 0}
            </span>{' '}
            miles
          </p>
        </Highlight>
        <Highlight label='Air Pressure'>
          <p css={tw` mt-1 font-medium text-xl md:text-3xl`}>
            <span css={tw`font-bold text-5xl md:text-6xl`}>
              {Math.round(current?.main.pressure) || 0}
            </span>{' '}
            mb
          </p>
        </Highlight>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
