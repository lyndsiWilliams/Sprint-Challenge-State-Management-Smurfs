import React from "react";
import ReactDOM from "react-dom";
// Store and Middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Reducer
import smurfReducer from './reducers/smurfReducer';

import "./index.css";
import App from "./components/App";

// Store
const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
