import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import './style/config.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
