import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index';


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
      <Route path="/" exact component={Home} />
    </div>
  </Router>
);


export default App;
