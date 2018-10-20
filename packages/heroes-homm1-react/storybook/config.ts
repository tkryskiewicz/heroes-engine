import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";

import "antd/dist/antd.css";

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story\.tsx$/);

configure(() => {
  req.keys().forEach(req);
}, module);
