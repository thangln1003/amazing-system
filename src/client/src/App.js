import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter } from 'react-router-dom';
import AppContext from './AppContext';
import { Routes } from './routes/routes';
import { routes } from './routes/routeItems';
import store from './store';
import { AuthProvider } from './providers/AuthProvider';

import '@fake-db';

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter children={Routes} basename="/" />
        </AuthProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
