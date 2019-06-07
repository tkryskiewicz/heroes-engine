import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { DismissTroopPrompt } from "./DismissTroopPrompt";

storiesOf("prompt|DismissTroopPrompt", module)
  .add("default", () => (
    <DismissTroopPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
