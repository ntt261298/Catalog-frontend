import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/layout.css';
import { PropTypes } from 'prop-types';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import UserDropdown from './UserDropdown';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    Catalog App
                </div>
                <div className="header-menu">
                    <LoginButton />
                    <SignupButton />
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(Header);