import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './components/home/index';
import CategoryPage from './components/category/index';
import ItemPage from './components/item/index';
import UserPage from './components/user/index';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !token
        ? <Redirect to="/" />
        : <Component {...props} />
    )
  }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  token: PropTypes.string,
};

PrivateRoute.defaultProps = {
  token: '',
};

const App = props => (
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
