import React from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import { PropTypes } from 'prop-types';
import Category from '../Commons/Category';
import Item from '../Commons/Item';
import Header from '../Layout/Header';

export const CategoryPage = props => (
  <div>
    <Header />
    <div className="home-main">
      <Category />
      <Item type="category" id={props.match.params.id} />
    </div>
  </div>
);

CategoryPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default connect(null, null)(CategoryPage);
