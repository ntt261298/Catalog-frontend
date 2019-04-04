import React from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import { PropTypes } from 'prop-types';
import ItemDetail from './ItemDetail';
import Header from '../layout/Header';

const ItemPage = props => (
  <div>
    <Header />
    <div className="item-main">
      <ItemDetail params={props.match.params} />
    </div>
  </div>
);

ItemPage.propTypes = {
  match: PropTypes.object.isRequired,
  // toggleLogin: PropTypes.func.isRequired,
  // userLogout: PropTypes.func.isRequired,
  // getSearchResults: PropTypes.func.isRequired
};

export default connect(null, null)(ItemPage);
