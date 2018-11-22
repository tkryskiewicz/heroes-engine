import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { BigBar } from "./BigBar";

storiesOf(BigBar.name, module)
  .add("default", () => (
    <BigBar>
      {text("Text", "Text")}
    </BigBar>
  ));
