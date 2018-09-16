// @flow

import React, { type Element } from 'react';
import type { LoadingProps } from './Loading.props';

const LoadingIcon: Function = (): Element<'div'> => (
  <div className="loading">
    <div className="loading__icon">
      <div className="loading__icon__bounce1" />
      <div className="loading__icon__bounce2" />
    </div>
  </div>
);

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

  if (pastDelay) return <LoadingIcon />;

  return null;
};

export default Loading;
