import "antd/dist/antd.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "heroes-homm1-state";

import "./style/_index.scss";

import { App } from "./App";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  (
    <Provider store={store}>
      <IntlProvider locale="en">
        <Router>
          <App />
        </Router>
      </IntlProvider>
    </Provider>
  ),
  document.getElementById("app-root"),
);
