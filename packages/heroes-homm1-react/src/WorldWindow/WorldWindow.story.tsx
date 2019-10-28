import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { WorldWindow } from "./WorldWindow";

storiesOf("WorldWindow", module)
  .add("default", () => (
    <WorldWindow
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
