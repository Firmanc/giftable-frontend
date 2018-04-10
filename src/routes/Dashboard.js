// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import { MainLayout } from 'layouts';
import lazyImport from 'services/lazyImport';

const DashboardRoutes: Function = (props: Object): Element<any> => (
  <Switch>
    <MainLayout
      exact={true}
      path={props.match.path}
      component={lazyImport.containers('Dashboard')}
    />
  </Switch>
);

export default DashboardRoutes;
