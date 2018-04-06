// @flow

import React, { type Element } from 'react';
import { TopNav } from 'components';
import type { HeaderProps } from './Header.props';

export default (props: HeaderProps): Element<'header'> => (
  <header className="header">
    {props.title}
    <TopNav
      title="Giftable"
      onClick={() => {}}
    />
  </header>
);
