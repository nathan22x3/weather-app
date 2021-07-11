import CloudImage from 'assets/images/cloud-background.png';
import GpsIcon from 'assets/images/gps.svg';
import LocationIcon from 'assets/images/location.svg';
import Button from 'components/Button';
import { TEMPERATURE_SCALES, WEATHER_STATES } from 'constants/index';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { formatDate, formatTemprature } from 'utils';
import { getData, getForecast, getTemperatureScale } from 'weatherSlice';
import Search from './Search';

const Sidebar = () => {
  const data = useSelector(getData);
  const forecast = useSelector(getForecast);
  const scale = useSelector(getTemperatureScale);
  const current = forecast && forecast[0];

  const [image, setImage] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    try {
      setImage(
        require(`assets/images/${WEATHER_STATES[current?.weather[0].main]}.png`)
          .default
      );
    } catch (error) {}
  }, [current]);

  useEffect(() => {
    document.body.style.overflowY = showSearch ? 'hidden' : '';
  }, [showSearch]);

  return (
    <aside
      css={tw`overflow-hidden relative flex flex-col items-center min-h-screen px-11 py-12 bg-dark-blue-200`}
    >
      <div css={tw`flex justify-between self-stretch mb-16 md:mb-28`}>
        <Button
          onClick={() => setShowSearch(true)}
          css={tw`px-4 py-3 rounded-md text-gray-100`}
        >
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
        <img src={image} alt={current?.weather[0].main} />
        <p css={tw`font-medium`}>
          <span css={tw`text-9xl`}>
            {Math.floor(formatTemprature(current?.main.temp, scale)) || 0}
          </span>
          <span css={tw`text-4xl text-gray-200`}>
            &#xb0;{TEMPERATURE_SCALES[scale || 'celsius']}
          </span>
        </p>
        <p css={tw`capitalize text-4xl text-gray-200`}>
          {current?.weather[0].description}
        </p>
        <p css={tw`text-lg text-gray-200`}>Today • {formatDate()}</p>
      </div>
      <p css={tw`flex items-center gap-x-2 mt-8`}>
        <img src={LocationIcon} alt='Your location:' />
        <span>{data?.city?.name}</span>
      </p>
      <Search isShow={showSearch} onClose={() => setShowSearch(false)} />
    </aside>
  );
};

export default Sidebar;
