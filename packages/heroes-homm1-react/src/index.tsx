import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "antd/dist/antd.css";

import { rootReducer } from "heroes-homm1-state";

const store = createStore(rootReducer, composeWithDevTools());

import { App } from "./App";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("app-root"),
);
