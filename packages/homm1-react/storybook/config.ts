import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story\.tsx$/);

configure(() => {
  req.keys().forEach(req);
}, module);
