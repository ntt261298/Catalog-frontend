import React from 'react';
import '../../style/home.css';
import Category from '../Commons/Category';
import Item from '../Commons/Item';
import Header from '../Layout/Header';

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
