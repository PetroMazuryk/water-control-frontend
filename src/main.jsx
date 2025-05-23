import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectStore } from './api/axiosConfig.js';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalProvider } from './components/ModalProvider.jsx';
import TourSteps from './onboarding/TourSteps.jsx'
import './lang/index.js';

import App from './App.jsx';
import './styles/styles.js';

injectStore(store);



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
          <TourSteps>
            <App />
            </TourSteps>
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
