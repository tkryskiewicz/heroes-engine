import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { spells as allSpells, SpellType } from "heroes-homm1";

import Readme = require("./README.md");

import { spell, spellTypeOptions } from "../stories";
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
      spellType={SpellType.Combat}
      page={0}
      onSpellClick={action("Spell Click")}
      onStatusTextChange={action("Status Text Change")}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("spell types", () => (
    <SpellBookWindow
      visible={true}
      spells={spells}
      spellType={select("Spell Type", spellTypeOptions, SpellType.Combat)}
      onSpellTypeChange={action("Spell Type Change")}
      page={0}
    />
  ))
  .add("pagging", () => (
    <SpellBookWindow
      visible={true}
      spells={spells}
      spellType={SpellType.Combat}
      page={number("Page", 0, { range: true, min: 0, max: 10, step: 1 })}
      onPageChange={action("Page Change")}
    />
  ))
  .add("spell details", () => (
    <SpellBookWindow
      visible={true}
      spells={spells}
      spellType={SpellType.Combat}
      page={0}
      visibleSpellDetails={spell("Visible Spell Details")}
      onCloseSpellDetailsClick={action("Close Spell Details Click")}
    />
  ));
