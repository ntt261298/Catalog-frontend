import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { showLogin } from 'actions/app';

export const LoginButton = props => (
  <button type="button" onClick={props.showLogin} className="btn-login">Login</button>
);

LoginButton.propTypes = {
  showLogin: PropTypes.func.isRequired,
};

export default connect(null, { showLogin })(LoginButton);
