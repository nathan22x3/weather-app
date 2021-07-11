import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import SearchIcon from 'assets/images/search.svg';
import CloseIcon from 'assets/images/close.svg';
import { useDispatch } from 'react-redux';
import { setLocation } from 'weatherSlice';

const Search = ({ isShow, onClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.api-ninjas.com/v1/city?name=${value}`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'X-Api-Key': process.env.REACT_APP_NINJAS_API,
        },
      }
    );
    const data = await res.json();

    const { latitude, longitude } = data[0];
    dispatch(setLocation({ latitude, longitude }));
  };

  return (
    <div
      css={[
        tw`absolute inset-0 transform -translate-x-full px-11 py-20 bg-inherit duration-500`,
        isShow && tw`translate-x-0`,
      ]}
    >
      <button css={tw`absolute top-5 right-8`} onClick={onClose}>
        <img src={CloseIcon} alt='Close' css={tw`w-10 h-10`} />
      </button>
      <form css={tw`flex gap-x-3`} onSubmit={handleSearch}>
        <div
          css={tw`flex-1 flex items-center gap-x-4 border border-gray-100 p-4`}
        >
          <img src={SearchIcon} alt='Place you want to find:' />
          <input
            type='text'
            value={value}
            placeholder='Search location'
            onChange={({ target }) => setValue(target.value)}
            css={tw`flex-1 outline-none bg-transparent`}
          />
        </div>
        <button
          onClick={handleSearch}
          css={tw`px-3 py-4 font-semibold bg-blue`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
