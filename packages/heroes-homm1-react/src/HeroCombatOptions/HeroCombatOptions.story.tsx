import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Alignment, HeroClass, HeroId } from "heroes-homm1";

import Readme = require("./README.md");

import { alignmentOptions, heroClassOptions, heroOptions } from "../stories";
import { HeroCombatOptions, HeroCombatOptionsProps } from "./HeroCombatOptions";

storiesOf("HeroCombatOptions", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const hero: HeroCombatOptionsProps["hero"] = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Hero", heroOptions, HeroId.LordKilburn),
      luck: 1,
      morale: -1,
      skills: {},
    };

    return (
      <HeroCombatOptions
        visible={boolean("Visible", true)}
        hero={hero}
        canCastSpell={boolean("Can Cast Spell", true)}
        onCastSpellClick={action("Cast Spell Click")}
        onRetreatClick={action("Retreat Click")}
        canSurrender={boolean("Can Surrender", true)}
        onSurrenderClick={action("Surrender Click")}
        onCancelClick={action("Cancel Click")}
      />
    );
  });
