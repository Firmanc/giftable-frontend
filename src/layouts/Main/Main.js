// @flow

import React, {
  type Element,
  type StatelessFunctionalComponent,
} from 'react';
import { Header } from 'containers';
import { Route } from 'react-router-dom';

const Main: Function = ({
  component: Component,
  ...rest
}: {
  component: StatelessFunctionalComponent<any>,
}): Route => (
  <Route
    {...rest}
    render={(matchProps: any): Element<any> => (
      <div className="mainLayout">
        <Header />
        <div className="mainLayout__content">
          <Component {...matchProps} />
        </div>
      </div>
    )}
  />
);

export default Main;
