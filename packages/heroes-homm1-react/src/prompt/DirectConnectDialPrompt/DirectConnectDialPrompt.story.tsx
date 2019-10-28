import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DirectConnectDialPrompt } from "./DirectConnectDialPrompt";

storiesOf("prompt|DirectConnectDialPrompt", module)
  .add("default", () => (
    <DirectConnectDialPrompt
      visible={boolean("Visible", true)}
      onCancelClick={action("Cancel Click")}
    />
  ));
