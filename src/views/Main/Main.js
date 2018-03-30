// @flow

import React, {
  type Element,
  type StatelessFunctionalComponent,
} from 'react';
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
      <div className="mainViews">
        <Component {...matchProps} />
      </div>
    )}
  />
);

export default Main;
