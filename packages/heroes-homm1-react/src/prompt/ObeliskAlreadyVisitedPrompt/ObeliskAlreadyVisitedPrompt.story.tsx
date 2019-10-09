import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ObeliskAlreadyVisitedPrompt } from "./ObeliskAlreadyVisitedPrompt";

storiesOf("prompt|ObeliskAlreadyVisitedPrompt", module)
  .add("default", () => (
    <ObeliskAlreadyVisitedPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
