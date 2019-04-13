import { createStore, applyMiddleware, compose } from 'redux';
import middleware from 'utils/middleware';
import rootReducer from 'reducers';

const initialState = {};

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(middleware),
    devTools,
  ),
);

export default store;
