import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class LoginButton extends Component {
    render() {
        return (
            <Fragment>
                <button className="btn-login">Login</button> 
            </Fragment>
        )
    }
}

LoginButton.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(LoginButton);