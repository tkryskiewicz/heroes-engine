import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { spell } from "../../stories";
import { SpellDetailsPrompt } from "./SpellDetailsPrompt";

storiesOf("prompt|SpellDetailsPrompt", module)
  .add("default", () => (
    <SpellDetailsPrompt
      visible={boolean("Visible", true)}
      spell={spell("Spell")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
