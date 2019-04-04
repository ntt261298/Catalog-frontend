import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/home/index';
import CategoryPage from './components/category/index';
import ItemPage from './components/item/index';
import UserPage from './components/user/index';

// import User from './components/user';
// import Category from './components/category';

// const PrivateRoute = ({ component: Component, token, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//       !token
//         ? <Redirect to="/" />
//         : <Component {...props} />
//     )
//   }
//   />
// );

const App = () => (
  <Router>
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/category/:id" exact component={CategoryPage} />
      <Route path="/category/:categoryID/item/:itemID" exact component={ItemPage} />
      <Route path="/me/items" exact component={UserPage} />
    </div>
  </Router>
);


export default App;
