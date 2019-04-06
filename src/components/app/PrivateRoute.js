import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !token
        ? <Redirect to="/" />
        : <Component {...props} />
    )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  token: PropTypes.string,
};

PrivateRoute.defaultProps = {
  token: '',
  component() {},
};

export default PrivateRoute;
