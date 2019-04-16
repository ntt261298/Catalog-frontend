import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import 'style/config.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'components/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
