// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import {
  MainLayout,
  ProtectedLayout,
  AuthLayout,
} from 'layouts';
import lazyImport from 'services/lazyImport';
import { NotFound } from 'components';
import DashboardRoutes from './Dashboard';

const Routes: Function = (): Element<any> => (
  <Switch>
    <MainLayout
      exact={true}
      path="/"
      component={lazyImport.containers('Home')}
    />
    <MainLayout
      exact={true}
      path="/about"
      component={lazyImport.containers('About')}
    />
    <AuthLayout
      exact={true}
      path="/login"
      component={lazyImport.containers('Login')}
    />
    <AuthLayout
      exact={true}
      path="/signup"
      component={lazyImport.containers('Signup')}
    />
    <ProtectedLayout
      path="/dashboard"
      component={DashboardRoutes}
    />
    <MainLayout
      component={NotFound}
    />
  </Switch>
);

export default Routes;
