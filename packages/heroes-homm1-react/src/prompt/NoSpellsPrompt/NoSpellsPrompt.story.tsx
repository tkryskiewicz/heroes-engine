import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { NoSpellsPrompt } from "./NoSpellsPrompt";

storiesOf("prompt|NoSpellsPrompt", module)
  .add("default", () => (
    <NoSpellsPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
