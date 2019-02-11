import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { spell } from "../stories";
import { SpellDetailsPrompt } from "./SpellDetailsPrompt";

storiesOf("SpellDetailsPrompt", module)
  .add("default", () => (
    <SpellDetailsPrompt
      visible={boolean("Visible", true)}
      spell={spell("Spell")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
