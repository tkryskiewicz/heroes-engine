import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import "antd/dist/antd.css";

import { App } from "./App";

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById("app-root"),
);
