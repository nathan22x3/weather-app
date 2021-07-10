import Main from 'containers/Main';
import Sidebar from 'containers/Sidebar';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

function App() {
  return (
    <div css={tw`overflow-x-hidden grid grid-cols-1 lg:grid-cols-[1fr 2fr]`}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
