import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import rootReducers from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const createdStore = applyMiddleware(thunk)(createStore);
const Store=createdStore(rootReducers)
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
