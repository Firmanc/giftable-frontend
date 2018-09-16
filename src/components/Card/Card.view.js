// @flow

import React, { type Element } from 'react';
import type { CardTypes } from './Card.props';

const Card: Function = ({
  children,
}: CardTypes): Element<'div'> => (
  <div className="card">
    {children}
  </div>
);

export default Card;
