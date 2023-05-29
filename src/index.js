import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          // theme='light'
          color='var(--toastify-color-progress-info)'
          background='var(--toastify-text-color-dark)'
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate >
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
