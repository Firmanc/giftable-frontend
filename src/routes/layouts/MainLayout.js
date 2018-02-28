import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
} from 'react-router-dom';

const MainLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="mainLayout">
        <Component {...matchProps} />
      </div>
    )}
  />
);

MainLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default MainLayout;