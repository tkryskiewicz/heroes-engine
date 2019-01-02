import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { CongratulationsWindow } from "./CongratulationsWindow";

storiesOf("CongratulationsWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <CongratulationsWindow
      visible={boolean("Visible", true)}
      onClick={action("Click")}
    >
      {text("Content", "Content")}
    </CongratulationsWindow>
  ));
