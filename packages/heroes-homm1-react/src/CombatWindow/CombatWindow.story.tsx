import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CombatWindow } from "./CombatWindow";

storiesOf(CombatWindow.name, module)
  .add("default", () => (
    <CombatWindow
      visible={boolean("Visible", true)}
    />
  ));
