import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { BigBar } from "./BigBar";

storiesOf("base|BigBar", module)
  .add("default", () => (
    <BigBar>
      {text("Text", "Text")}
    </BigBar>
  ));
