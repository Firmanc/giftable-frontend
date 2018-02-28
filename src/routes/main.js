import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './layouts';

const Help = () => (
  <div> help </div>
);

const Home = () => (
  <div> home </div>
);

const Routes = () => (
  <Switch>
    <MainLayout exact path="/" component={Home} />
    <MainLayout exact path="/help" component={Help} />
  </Switch>
);

export default Routes;