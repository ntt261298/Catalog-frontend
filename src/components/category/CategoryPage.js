import React from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import { PropTypes } from 'prop-types';
import Category from '../commons/Category';
import Item from '../commons/Item';
import Header from '../layout/Header';

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
