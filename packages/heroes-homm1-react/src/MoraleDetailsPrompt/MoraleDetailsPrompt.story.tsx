import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MoraleDetailsPrompt } from "./MoraleDetailsPrompt";

storiesOf("MoraleDetailsPrompt", module)
  .add("default", () => (
    <MoraleDetailsPrompt
      visible={boolean("Visible", true)}
      value={number("Morale", 0, { range: true, min: -3, max: 3, step: 1 })}
      onConfirmClick={action("Confirm Click")}
    />
  ));
