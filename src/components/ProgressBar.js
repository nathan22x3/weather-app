import PropTypes from 'prop-types';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const ProgressBar = ({ percent, min, max, className }) => {
  return (
    <div css={tw`flex flex-col gap-y-1`} {...{ className }}>
      <div css={tw`flex justify-between font-bold text-xs text-gray-200`}>
        <span>{min}</span>
        <span>{Math.round((max + min) / 2)}</span>
        <span>{max}</span>
      </div>
      <div css={tw`overflow-hidden flex rounded-xl h-2 bg-gray-100`}>
        <span
          css={tw`rounded-xl bg-yellow`}
          style={{ flex: percent / max }}
        ></span>
      </div>
      <span css={tw`self-end font-bold text-xs text-gray-200`}>%</span>
    </div>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
  min: 0,
  max: 100,
};

export default ProgressBar;
