import React from 'react';
import 'style/home.css';
import Category from 'components/Commons/Category';
import Item from 'components/Commons/Item';
import Header from 'components/Layout/Header';

export const HomePage = () => (
  <div>
    <Header />
    <div className="home-main">
      <Category />
      <Item type="home" id="" />
    </div>
  </div>
);

export default HomePage;
