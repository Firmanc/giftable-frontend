// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import { MainLayout } from 'src/layouts';
import lazyImport from 'src/services/lazyImport';

const DashboardRoutes: Function = ({
  match = {},
}: Object): Element<any> => (
  <Switch>
    <MainLayout
      exact={true}
      path={match.path}
      component={lazyImport.containers('Dashboard')}
    />
  </Switch>
);

export default DashboardRoutes;
