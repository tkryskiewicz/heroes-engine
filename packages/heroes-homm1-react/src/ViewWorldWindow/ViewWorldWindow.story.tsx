import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ViewWorldWindow } from "./ViewWorldWindow";

storiesOf(ViewWorldWindow.name, module)
  .add("default", () => (
    <ViewWorldWindow
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
