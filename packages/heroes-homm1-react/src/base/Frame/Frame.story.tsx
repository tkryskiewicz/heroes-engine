import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Frame } from "./Frame";

storiesOf("base|Frame", module)
  .add("default", () => (
    <Frame>
      {text("Content", "Content")}
    </Frame>
  ));
