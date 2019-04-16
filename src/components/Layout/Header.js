import React, { Fragment } from 'react';
import 'style/layout.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import LoginButton from 'components/Layout/LoginButton';
import SignupButton from 'components/Layout/SignupButton';
import UserDropdown from 'components/Layout/UserDropdown';
import ModalContainer from 'components/Layout/ModalContainer';

export const Header = props => (
  <div className="header">
    <div className="header-logo">
      <Link to="/">Catalog App</Link>
    </div>
    <div className="header-menu">
      {props.loggedIn ? (
        <UserDropdown />
      ) : (
        <Fragment>
          <LoginButton />
          <SignupButton />
        </Fragment>
      )}
      <ModalContainer />
    </div>
  </div>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, null)(Header);
