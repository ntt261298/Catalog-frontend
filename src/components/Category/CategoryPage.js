import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Category from 'components/Commons/Category';
import Item from 'components/Commons/Item';
import Header from 'components/Layout/Header';

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
