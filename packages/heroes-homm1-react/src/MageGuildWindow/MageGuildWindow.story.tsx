import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SpellId, spells as allSpells } from "heroes-homm1";

import Readme = require("./README.md");

import { spell } from "../stories";
import { MageGuildWindow, MageGuildWindowProps } from "./MageGuildWindow";

const availableSpells: string[] = [
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
  .filter((s) => availableSpells.includes(s.id))
  .map((s) => ({
    id: s.id,
    level: s.level,
  }));

storiesOf("MageGuildWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <MageGuildWindow
      visible={boolean("Visible", true)}
      spells={spells}
      levelBuilt={number("Level Built", 1, { range: true, min: 1, max: 4, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("spell detail", () => (
    <MageGuildWindow
      visible={true}
      spells={spells}
      levelBuilt={4}
      visibleSpellDetail={spell("Visible Spell Detail")}
      onVisibleSpellDetailChange={action("Visible Spell Detail Change")}
    />
  ));
