import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DialingPrompt } from "./DialingPrompt";

storiesOf("prompt|DialingPrompt", module)
  .add("default", () => (
    <DialingPrompt
      visible={boolean("Visible", true)}
      number={text("Number", "12345")}
      onCancelClick={action("Cancel Click")}
    />
  ));
