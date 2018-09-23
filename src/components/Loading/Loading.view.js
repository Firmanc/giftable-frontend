// @flow

import React, { type Element } from 'react';
import { Spinner } from 'src/components';
import type { LoadingProps } from './Loading.props';

const Error: Function = (): Element<'div'> => (
  <div className="loading">
    <div className="loading__error">
      <h1>Error</h1>
    </div>
  </div>
);

const Loading: Function = ({
  error,
  pastDelay,
}: LoadingProps): ?Element<any> => {
  if (error) return <Error />;

  if (pastDelay) {
    return (
      <div className="loading">
        <Spinner type="doubleBounce" />
      </div>
    );
  }

  return null;
};

export default Loading;
