import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { WaitingForRingPrompt } from "./WaitingForRingPrompt";

storiesOf("prompt|WaitingForRingPrompt", module)
  .add("default", () => (
    <WaitingForRingPrompt
      visible={boolean("Visible", true)}
      onCancelClick={action("Cancel Click")}
    />
  ));
