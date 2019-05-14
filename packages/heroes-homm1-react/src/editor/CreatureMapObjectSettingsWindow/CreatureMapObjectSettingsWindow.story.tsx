import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureMapObjectSettingsWindow } from "./CreatureMapObjectSettingsWindow";

storiesOf("editor/CreatureMapObjectSettingsWindow", module)
  .add("default", () => (
    <CreatureMapObjectSettingsWindow
      visible={boolean("Visible", true)}
      count={number("Count", 0, { range: true, min: 0, max: 999, step: 1 })}
      onCountChange={action("Count Change")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
