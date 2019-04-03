import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleSignup } from '../../actions/app';

const SignupButton = props => (
  <button type="button" onClick={props.toggleSignup} className="btn-signup">Signup</button>
);

SignupButton.propTypes = {
  toggleSignup: PropTypes.func.isRequired,
};

export default connect(null, { toggleSignup })(SignupButton);
