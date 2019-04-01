import React from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import Category from './Category';
// import Item from './Item';
import Header from '../layout/Header';

const Home = () => (
  <div>
    <Header />
    <div className="home-main">
      <Category />
    </div>
  </div>
);

Home.propTypes = {
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(Home);
