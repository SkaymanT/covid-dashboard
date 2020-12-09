import '@/assets/stylesheets/index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux-store';

import App from '@/components/app';

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
