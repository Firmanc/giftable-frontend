// @flow

import React, { type Element } from 'react';
import type { LoadingProps } from './Loading.props';

const Loading: Function = (): Element<'div'> => (
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

export default (props: LoadingProps): ?Element<any> => {
  if (props.error) return <Error />;

  if (props.pastDelay) return <Loading />;

  return null;
};
