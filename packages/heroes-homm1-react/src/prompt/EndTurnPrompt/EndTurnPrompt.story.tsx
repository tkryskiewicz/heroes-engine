import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { EndTurnPrompt } from "./EndTurnPrompt";

storiesOf("prompt|EndTurnPrompt", module)
  .add("default", () => (
    <EndTurnPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
