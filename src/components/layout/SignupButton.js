import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class SignupButton extends Component {
    render() {
        return (
            <Fragment>
                <button className="btn-signup">Signup</button> 
            </Fragment>
        )
    }
}

SignupButton.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(SignupButton);