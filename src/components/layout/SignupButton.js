import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { showSignup } from '../../actions/app';

export const SignupButton = props => (
  <button type="button" onClick={props.showSignup} className="btn-signup">Signup</button>
);

SignupButton.propTypes = {
  showSignup: PropTypes.func.isRequired,
};

export default connect(null, { showSignup })(SignupButton);
