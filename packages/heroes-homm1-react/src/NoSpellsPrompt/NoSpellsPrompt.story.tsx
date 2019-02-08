import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { NoSpellsPrompt } from "./NoSpellsPrompt";

storiesOf("NoSpellsPrompt", module)
  .add("default", () => (
    <NoSpellsPrompt
      visible={boolean("Visible", true)}
      onOkayClick={action("Okay Click")}
    />
  ));
