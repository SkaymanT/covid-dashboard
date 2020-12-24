import '@/assets/stylesheets/index.scss';

import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';
import AppProvider from '@/context/appContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
