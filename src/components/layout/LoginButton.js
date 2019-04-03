import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleLogin } from '../../actions/app';

const LoginButton = props => (
  <button type="button" onClick={props.toggleLogin} className="btn-login">Login</button>
);

LoginButton.propTypes = {
  toggleLogin: PropTypes.func.isRequired,
};

export default connect(null, { toggleLogin })(LoginButton);
