import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export const WEATHER_STATES = [
  'c',
  'h',
  'hc',
  'hr',
  'lc',
  'lr',
  's',
  'sl',
  'sn',
  't',
];

const Weather = ({ date, state, minTemp, maxTemp }) => {
  const [image, setImage] = useState(null);

  useEffect(
    () => setImage(require(`assets/images/${state}.png`).default),
    [state]
  );

  return (
    <div css={tw`flex-1 flex flex-col items-center px-4 py-5 bg-dark-blue-200`}>
      <p css={tw`font-medium`}>{date}</p>
      <img src={image} alt={state} css={tw`w-14 mt-2 mb-7`} />
      <p css={tw`self-stretch flex justify-between font-medium`}>
        <span>
          {maxTemp}
          &#xb0;C
        </span>
        <span css={tw`text-gray-200`}>
          {minTemp}
          &#xb0;C
        </span>
      </p>
    </div>
  );
};

Weather.propTypes = {
  date: PropTypes.string,
  state: PropTypes.oneOf(WEATHER_STATES).isRequired,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
};

Weather.defaultProps = {
  date: 'Date',
  minTemp: 0,
  maxTemp: 0,
};

export default Weather;
