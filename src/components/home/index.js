import React from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import Category from '../commons/Category';
import Item from '../commons/Item';
import Header from '../layout/Header';

const HomePage = () => (
  <div>
    <Header />
    <div className="home-main">
      <Category />
      <Item />
    </div>
  </div>
);

HomePage.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(HomePage);
