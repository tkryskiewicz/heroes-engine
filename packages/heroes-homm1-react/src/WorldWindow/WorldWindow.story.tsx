import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { WorldWindow } from "./WorldWindow";

storiesOf("WorldWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <WorldWindow
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
