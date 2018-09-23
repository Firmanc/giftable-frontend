// @flow

import React from 'react';
import { type SpinnerType } from './Spinner.props';

const ThreeDots: Function = (): Element<'div'> => (
  <div className="spinner--threeDots">
    <div className="spinner__bounce1" />
    <div className="spinner__bounce2" />
    <div className="spinner__bounce3" />
  </div>
);

const spinnerSelections: Object = {
  threeDots: (): Element<'div'> => <ThreeDots />,
};

const Spinner: Function = ({
  type,
}: SpinnerType): Element<'div'> => {
  const element: Function = spinnerSelections[type] || spinnerSelections.default;

  return element();
};

export default Spinner;
