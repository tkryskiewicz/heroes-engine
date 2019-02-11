import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SpellId } from "heroes-homm1";

import { spellOptions } from "../stories";
import { SpellDetailsPrompt } from "./SpellDetailsPrompt";

storiesOf("SpellDetailsPrompt", module)
  .add("default", () => (
    <SpellDetailsPrompt
      visible={boolean("Visible", true)}
      spell={select("Spell", spellOptions, SpellId.Bless)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
