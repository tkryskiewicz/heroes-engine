import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { LuckDetailsPrompt } from "./LuckDetailsPrompt";

storiesOf("LuckDetailsPrompt", module)
  .add("default", () => (
    <LuckDetailsPrompt
      visible={boolean("Visible", true)}
      value={number("Value", 0, { range: true, min: -3, max: 3, step: 1 })}
      onConfirmClick={action("Confirm Click")}
    />
  ));
