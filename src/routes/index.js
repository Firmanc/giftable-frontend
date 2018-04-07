// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import {
  MainLayout,
  ProtectedLayout,
  AuthLayout,
} from 'layouts';
import {
  Login,
  Home,
} from 'containers';
import { NotFound } from 'components';
import DashboardRoutes from './Dashboard';

const Routes: Function = (): Element<any> => (
  <Switch>
    <MainLayout
      exact={true}
      path="/"
      component={Home}
    />
    <AuthLayout
      exact={true}
      path="/login"
      component={Login}
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
