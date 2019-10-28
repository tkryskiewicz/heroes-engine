import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import "antd/dist/antd.css";

import { withIntl } from "./withIntl";

addDecorator(withIntl);

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story\.tsx$/);

configure(() => {
  req.keys().forEach(req);
}, module);
