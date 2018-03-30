// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import { MainView, ProtectedView } from 'views';
import {
  Login,
  Home,
  NotFound,
} from 'containers';
import DashboardRoutes from './Dashboard';

const Routes: Function = (): Element<any> => (
  <Switch>
    <MainView
      exact={true}
      path="/"
      component={Home}
    />
    <MainView
      exact={true}
      path="/login"
      component={Login}
    />
    <ProtectedView
      path="/dashboard"
      component={DashboardRoutes}
    />
    <MainView
      component={NotFound}
    />
  </Switch>
);

export default Routes;
