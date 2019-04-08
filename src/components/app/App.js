import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { loadToken } from '../../utils/localStorage';
import HomePage from '../home/HomePage';
import CategoryPage from '../category/CategoryPage';
import ItemPage from '../item/ItemPage';
import UserPage from '../user/UserPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:id" exact component={CategoryPage} />
        <Route path="/category/:categoryID/item/:itemID" exact component={ItemPage} />
        <Route path="/me/items" exact render={() => (!loadToken() ? <Redirect to="/" /> : <UserPage />)} />
      </div>
    </Router>
  );
}
