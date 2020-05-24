import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
