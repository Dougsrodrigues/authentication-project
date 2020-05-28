import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ToastComponent from './components/commom/Toast';
import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </Provider>
      <ToastComponent />
      <GlobalStyles />
    </>
  );
}

export default App;
