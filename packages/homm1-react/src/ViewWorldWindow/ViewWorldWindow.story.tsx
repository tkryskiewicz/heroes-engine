import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ViewWorldWindow } from "./ViewWorldWindow";

storiesOf(ViewWorldWindow.name, module)
  .add("default", () => (
    <ViewWorldWindow
      onExitClick={action("Exit Click")}
    />
  ));
