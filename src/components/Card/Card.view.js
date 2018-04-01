// @flow

import React, { type Element } from 'react';
import type { CardTypes } from './Card.props';

export default (props: CardTypes): Element<'div'> => (
  <div className="card">
    {props.children}
  </div>
);
