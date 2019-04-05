import React from 'react';
import { connect } from 'react-redux';
import '../../style/user.css';
// import { PropTypes } from 'prop-types';
import Item from './UserItem';
import Header from '../layout/Header';

const UserPage = () => (
  <div>
    <Header />
    <div className="user-main">
      <Item type="user" id="" />
    </div>
  </div>
);

UserPage.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(UserPage);
