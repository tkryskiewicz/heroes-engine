import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureMapObjectDetailsWindow } from "./CreatureMapObjectDetailsWindow";

storiesOf("editor/CreatureMapObjectDetailsWindow", module)
  .add("default", () => (
    <CreatureMapObjectDetailsWindow
      visible={boolean("Visible", true)}
      count={number("Count", 0, { range: true, min: 0, max: 999, step: 1 })}
      onCountChange={action("Count Change")}
      countValueRangePromptVisible={boolean("Count Value Range Prompt Visible", false)}
      onOpenCountValueRangePromptClick={action("Open Count Value Range Prompt Click")}
      onCloseCountValueRangePromptClick={action("Close Count Value Range Prompt Click")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
