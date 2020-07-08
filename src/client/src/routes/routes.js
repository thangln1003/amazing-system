import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import history from '@history';

import Callback from '../views/Auth/Callback';
import Logout from '../views/Auth/Logout';
import LogoutCallback from '../views/Auth/LogoutCallback';
import SilentRenew from '../views/Auth/SilentRenew';

import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';

export const Routes = (
  <Switch>
    <Route exact={true} path="/signin-oidc" component={Callback} />
    <Route exact={true} path="/logout" component={Logout} />
    <Route exact={true} path="/logout/callback" component={LogoutCallback} />
    <Route exact={true} path="/silentrenew" component={SilentRenew} />
    <Route history={history} path="/auth" render={(props) => <AuthLayout {...props} />} />
    <Route history={history} path="/admin" render={(props) => <AdminLayout {...props} />} />
    <Redirect from="/" to="/auth/login" />
  </Switch>
);
