// @flow

import React, {
  type Element,
  type StatelessFunctionalComponent,
} from 'react';
import { Header } from 'containers';
import { Route, Redirect } from 'react-router-dom';

const Authentication: Function = ({
  component: Component,
  isAuthenticated,
  ...rest
}: {
  component: StatelessFunctionalComponent<any>,
  isAuthenticated: boolean,
}): Route => (
  <Route
    {...rest}
    render={(matchProps: any): Element<any> => {
      const { from }: { from: Object } = matchProps.location.state
        || { from: { pathname: '/' } };

      return isAuthenticated ? (
        <Redirect to={from} />
      ) : (
        <div className="mainLayout">
          <Header />
          <main className="mainLayout__main">
            <Component {...matchProps} />
          </main>
        </div>
      );
    }}
  />
);

export default Authentication;
