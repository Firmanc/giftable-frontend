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
  Signup,
  Home,
  About,
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
    <MainLayout
      exact={true}
      path="/about"
      component={About}
    />
    <AuthLayout
      exact={true}
      path="/login"
      component={Login}
    />
    <AuthLayout
      exact={true}
      path="/signup"
      component={Signup}
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
