import React from 'react';
import history from '@history';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import { routes } from './routes';
import store from './store';

import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

import '@fake-db';

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route history={history} path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Route history={history} path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/auth/login" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
