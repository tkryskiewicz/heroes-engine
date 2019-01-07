import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { SpellId, spells as allSpells } from "heroes-homm1";

import Readme = require("./README.md");

import { MageGuildWindow, MageGuildWindowProps } from "./MageGuildWindow";

const availableSpells = [
  SpellId.Bless,
  SpellId.Protection,
  SpellId.ViewResources,
  SpellId.Haste,
  SpellId.SummonBoat,
  SpellId.ViewHeroes,
  SpellId.Fireball,
  SpellId.MeteorShower,
  SpellId.ViewAll,
];

const spells: MageGuildWindowProps["spells"] = allSpells
  .filter((s) => availableSpells.indexOf(s.id) !== -1)
  .map((s) => ({
    id: s.id,
    level: s.level,
  }));

storiesOf("MageGuildWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <MageGuildWindow
      visible={boolean("Visible", true)}
      spells={spells}
      levelBuilt={number("Level Built", 1, { range: true, min: 1, max: 4, step: 1 })}
      onSpellClick={action("Spell Click")}
    />
  ));
