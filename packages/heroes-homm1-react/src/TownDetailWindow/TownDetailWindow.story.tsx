import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownDetailWindow } from "./TownDetailWindow";

storiesOf("TownDetailWindow", module)
  .add("default", () => (
    <TownDetailWindow
      visible={boolean("Visible", true)}
      statusText={text("Status Text", "Status Text")}
      onExitClick={action("Exit Click")}
    >
      {text("Content", "Content")}
    </TownDetailWindow>
  ));
