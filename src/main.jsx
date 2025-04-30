import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectStore } from './api/axiosConfig.js';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalProvider } from './components/ModalProvider.jsx';
import { TourProvider } from '@reactour/tour';
import './lang/index.js';

import App from './App.jsx';
import './styles/styles.js';

injectStore(store);

const steps = [
  {
    selector: '.step-1',
    content: 'Це головна кнопка!',
  },
  {
    selector: '.step-2',
    content: 'Це поле для пошуку!',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter
          basename="/water-control-frontend/"
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ModalProvider>
          <TourProvider steps={steps}>
            <App />
            </TourProvider>
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
