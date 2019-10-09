import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { VisitObeliskPrompt } from "./VisitObeliskPrompt";

storiesOf("prompt|VisitObeliskPrompt", module)
  .add("default", () => (
    <VisitObeliskPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
