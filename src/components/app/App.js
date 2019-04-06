import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import HomePage from '../home/HomePage';
import CategoryPage from '../category/CategoryPage';
import ItemPage from '../item/ItemPage';
import UserPage from '../user/UserPage';

export const App = props => (
  <Router>
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/category/:id" exact component={CategoryPage} />
      <Route path="/category/:categoryID/item/:itemID" exact component={ItemPage} />
      <PrivateRoute
        path="/me/items"
        exact
        component={UserPage}
        token={props.token}
      />
    </div>
  </Router>
);

App.propTypes = {
  token: PropTypes.string,
};

App.defaultProps = {
  token: '',
};

const mapStateToProps = state => ({
  token: state.user.accessToken,
});

export default connect(mapStateToProps, null)(App);