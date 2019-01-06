import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { spells as allSpells, SpellType } from "heroes-homm1";

import Readme = require("./README.md");

import { spellTypeOptions } from "../stories";
import { SpellBookWindow } from "./SpellBookWindow";

const spells = allSpells.map((s) => ({
  ...s,
  charges: 0,
}));

storiesOf("SpellBookWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <SpellBookWindow
      visible={boolean("Visible", true)}
      spells={spells}
      spellType={select("Spell Type", spellTypeOptions, SpellType.Combat)}
      onSpellTypeChange={action("Spell Type Change")}
      onSpellClick={action("Spell Click")}
      onExitClick={action("Exit Click")}
    />
  ));
