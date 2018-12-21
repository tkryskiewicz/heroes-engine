import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreditsWindow } from "./CreditsWindow";

storiesOf(CreditsWindow.name, module)
  .add("default", () => (
    <CreditsWindow
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
