// @flow

import React, { type Element } from 'react';
import type { DashboardProps } from './Dashboard.props';

export default (props: DashboardProps): Element<'div'> => (
  <div className="dashboard">
    {props.title}
    Dashboard
  </div>
);
