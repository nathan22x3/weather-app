import { TEMPERATURE_SCALES, WEATHER_STATES } from 'constants/index';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { formatDate, formatTemprature } from 'utils';
import { getTemperatureScale } from 'weatherSlice';

const Weather = ({ date, state, minTemp, maxTemp }) => {
  const scale = useSelector(getTemperatureScale);
  const [image, setImage] = useState(null);

  useEffect(() => {
    try {
      setImage(require(`assets/images/${WEATHER_STATES[state]}.png`).default);
    } catch (error) {}
  }, [state]);

  return (
    <div
      css={tw`flex-1 grid grid-cols-1 justify-items-center items-center px-4 py-5 bg-dark-blue-200`}
    >
      <p css={tw`font-medium`}>{formatDate(new Date(date))}</p>
      <img src={image} alt={state} css={tw`w-14 mt-2 mb-7`} />
      <p
        css={tw`self-end justify-self-stretch flex justify-between font-medium`}
      >
        <span>
          {Math.floor(formatTemprature(maxTemp, scale)) || 0}
          &#xb0;{TEMPERATURE_SCALES[scale || 'celsius']}
        </span>
        <span css={tw`text-gray-200`}>
          {Math.floor(formatTemprature(minTemp, scale)) || 0}
          &#xb0;{TEMPERATURE_SCALES[scale || 'celsius']}
        </span>
      </p>
    </div>
  );
};

Weather.propTypes = {
  date: PropTypes.string,
  state: PropTypes.string.isRequired,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
};

Weather.defaultProps = {
  date: 'Date',
  minTemp: 0,
  maxTemp: 0,
};

export default Weather;
