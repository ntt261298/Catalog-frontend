import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import HomePage from 'components/Home/HomePage';
import CategoryPage from 'components/Category/CategoryPage';
import ItemPage from 'components/Item/ItemPage';
import UserPage from 'components/User/UserPage';
import Page404 from 'components/Layout/404';

export const App = props => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:id" exact component={CategoryPage} />
        <Route path="/category/:categoryID/item/:itemID" exact component={ItemPage} />
        <Route path="/me/items" exact render={() => (!props.loggedIn ? <Redirect to="/" /> : <UserPage />)} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, null)(App);
