import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { CreditsWindow } from "./CreditsWindow";

storiesOf("CreditsWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <CreditsWindow
      visible={boolean("Visible", true)}
      onClick={action("Click")}
    />
  ));
