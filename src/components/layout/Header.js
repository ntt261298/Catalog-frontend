import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../../style/layout.css';
import { PropTypes } from 'prop-types';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import UserDropdown from './UserDropdown';
import ModalContainer from './ModalContainer';

const Header = (props) => {
  const { accessToken } = props;
  return (
    <div className="header">
      <div className="header-logo">
        Catalog App
      </div>
      <div className="header-menu">
        {accessToken ? (
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
};

Header.propTypes = {
  accessToken: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps, null)(Header);
