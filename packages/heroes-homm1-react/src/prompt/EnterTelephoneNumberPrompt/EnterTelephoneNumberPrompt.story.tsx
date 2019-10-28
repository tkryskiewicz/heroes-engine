import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { EnterTelephoneNumberPrompt } from "./EnterTelephoneNumberPrompt";

storiesOf("prompt|EnterTelephoneNumberPrompt", module)
  .add("default", () => (
    <EnterTelephoneNumberPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
