// @flow

import React from 'react';
import { type SpinnerType } from './Spinner.props';

const TripleBounce: Function = (): Element<'div'> => (
  <div className="spinner spinner--tripleBounce">
    <div className="spinner__bounce1" />
    <div className="spinner__bounce2" />
    <div className="spinner__bounce3" />
  </div>
);

const DoubleBounce: Function = (): Element<'div'> => (
  <div className="spinner spinner--doubleBounce">
    <div className="spinner__icon">
      <div className="spinner__icon__bounce1" />
      <div className="spinner__icon__bounce2" />
    </div>
  </div>
);

const spinnerSelections: Object = {
  doubleBounce: (): Element<'div'> => <DoubleBounce />,
  tripleBounce: (): Element<'div'> => <TripleBounce />,
};

const Spinner: Function = ({
  type,
}: SpinnerType): Element<'div'> => {
  const spinner: Function = spinnerSelections[type] || spinnerSelections.tripleBounce;

  return spinner();
};

export default Spinner;
