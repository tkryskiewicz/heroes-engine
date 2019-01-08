import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StatusBar } from "./StatusBar";

storiesOf("TownDetailWindow/StatusBar", module)
  .add("default", () => (
    <StatusBar
      statusText={text("Content", "Content")}
    />
  ));
