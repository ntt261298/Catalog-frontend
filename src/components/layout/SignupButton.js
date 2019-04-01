import React from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';

const SignupButton = () => (
  <button type="button" className="btn-signup">Signup</button>
);

SignupButton.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(SignupButton);
