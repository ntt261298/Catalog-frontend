import React from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';

const LoginButton = () => (
  <button type="button" className="btn-login">Login</button>
);

LoginButton.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(LoginButton);
