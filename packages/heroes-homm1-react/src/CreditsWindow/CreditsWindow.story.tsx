import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Readme = require("./README.md");

import { CreditsWindow } from "./CreditsWindow";

storiesOf("CreditsWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <CreditsWindow
      visible={boolean("Visible", true)}
      onClick={action("Click")}
    />
  ));
