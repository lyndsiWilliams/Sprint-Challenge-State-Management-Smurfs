// React
import React from "react";
import ReactDOM from "react-dom";
// Store and Middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
// Reducer
import smurfReducer from './reducers/smurfReducer';
// Styling
import "./index.css";
// Component
import App from "./components/App";


const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);