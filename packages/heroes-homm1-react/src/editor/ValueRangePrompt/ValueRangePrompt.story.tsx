import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ValueRangePrompt } from "./ValueRangePrompt";

storiesOf("editor/ValueRangePrompt", module)
  .add("default", () => (
    <ValueRangePrompt
      visible={boolean("Visible", true)}
      min={number("Min", 0)}
      max={number("Max", 10)}
      minIsRandom={boolean("Min Is Random", false)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
