import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./index.css";
import languageSet from "./utils/languageSet";
import App from "./App";

languageSet();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);