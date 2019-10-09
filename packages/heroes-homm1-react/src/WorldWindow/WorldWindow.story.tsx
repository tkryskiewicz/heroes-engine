import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Readme = require("./README.md");

import { WorldWindow } from "./WorldWindow";

storiesOf("WorldWindow", module)
    .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <WorldWindow
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
