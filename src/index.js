import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {der  Provi} from 'react-redux';
import './index.css';
import thunk from 'redux-thunk';
import appReducer from './reducers/reducers'
import Routes from "./routes";

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  appReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);


