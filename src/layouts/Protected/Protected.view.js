// @flow

import React, {
  type Element,
  type StatelessFunctionalComponent,
} from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected: Function = ({
  component: Component,
  isAuthenticated,
  ...rest
}: {
  component: StatelessFunctionalComponent<any>,
  isAuthenticated: boolean,
}): Route => (
  <Route
    {...rest}
    render={(matchProps: any): Element<any> => isAuthenticated
      ? <Component {...matchProps} />
      : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: matchProps.location },
          }}
        />
      )
    }
  />
);

export default Protected;
