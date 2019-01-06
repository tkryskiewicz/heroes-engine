import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SpellId } from "heroes-homm1";

import { spellOptions } from "../../stories";
import { Spell } from "./Spell";

storiesOf("SpellBookWindow/Spell", module)
  .add("default", () => (
    <Spell
      spell={select("Spell", spellOptions, SpellId.Bless)}
      charges={number("Charges", 0, { range: true, min: 0, max: 10, step: 1 })}
      onClick={action("Click")}
    />
  ));
