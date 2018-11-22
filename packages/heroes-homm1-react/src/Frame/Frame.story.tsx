import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Frame } from "./Frame";

storiesOf(Frame.name, module)
  .add("default", () => (
    <Frame>
      {text("Content", "Content")}
    </Frame>
  ));
