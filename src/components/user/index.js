import React from 'react';
import { connect } from 'react-redux';
import '../../style/user.css';
// import { PropTypes } from 'prop-types';
import Item from './Item';
import Header from '../layout/Header';

const UserPage = () => (
  <div>
    <Header />
    <div className="user-main">
      <Item />
    </div>
  </div>
);

UserPage.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(UserPage);
