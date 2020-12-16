import '@/assets/stylesheets/index.scss';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/app';

import { store } from './redux-app';

const rootElement = document.getElementById('app');
render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
