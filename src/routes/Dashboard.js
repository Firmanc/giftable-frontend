// @flow

import React, { type Element } from 'react';
import { Switch } from 'react-router-dom';
import { MainLayout } from 'layouts';
import { Dashboard } from 'containers';

const DashboardRoutes: Function = (props: Object): Element<any> => (
  <Switch>
    <MainLayout
      exact={true}
      path={props.match.path}
      component={Dashboard}
    />
  </Switch>
);

export default DashboardRoutes;
