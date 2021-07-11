import Main from 'containers/Main';
import Sidebar from 'containers/Sidebar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { fetchData, getLocation, setLocation } from 'weatherSlice';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(setLocation({ latitude, longitude }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (!location) return;
      dispatch(
        fetchData({
          latitude: location?.latitude,
          longitude: location?.longitude,
        })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );

  return (
    <div css={tw`overflow-x-hidden grid grid-cols-1 lg:grid-cols-[1fr 2fr]`}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
