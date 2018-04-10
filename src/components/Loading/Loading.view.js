// @flow

import React, { type Element } from 'react';

export default (): Element<'div'> => (
  <div className="loading">
    <div className="loading__icon">
      <div className="loading__icon__bounce1" />
      <div className="loading__icon__bounce2" />
    </div>
  </div>
);
