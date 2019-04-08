import React from 'react';
import '../../style/home.css';
import Category from '../commons/Category';
import Item from '../commons/Item';
import Header from '../layout/Header';

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
