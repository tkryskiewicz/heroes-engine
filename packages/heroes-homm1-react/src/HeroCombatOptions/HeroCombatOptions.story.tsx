import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Alignment } from "heroes-homm1";

import Readme = require("./README.md");

import { alignmentOptions, hero, heroClass } from "../stories";
import { HeroCombatOptions, HeroCombatOptionsProps } from "./HeroCombatOptions";

storiesOf("HeroCombatOptions", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const h: HeroCombatOptionsProps["hero"] = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      heroClass: heroClass("Hero Class"),
      id: hero("Hero"),
      luck: 1,
      morale: -1,
      skills: {},
    };

    return (
      <HeroCombatOptions
        visible={boolean("Visible", true)}
        hero={h}
        canCastSpell={boolean("Can Cast Spell", true)}
        onCastSpellMouseEnter={action("Cast Spell Mouse Enter")}
        onCastSpellMouseLeave={action("Cast Spell Mouse Leave")}
        onCastSpellClick={action("Cast Spell Click")}
        canRetreat={boolean("Can Retreat", true)}
        onRetreatMouseEnter={action("Retreat Mouse Enter")}
        onRetreatMouseLeave={action("Retreat Mouse Leave")}
        onRetreatClick={action("Retreat Click")}
        canSurrender={boolean("Can Surrender", true)}
        onSurrenderMouseEnter={action("Surrender Mouse Enter")}
        onSurrenderMouseLeave={action("Surrender Mouse Leave")}
        onSurrenderClick={action("Surrender Click")}
        onCancelMouseEnter={action("Cancel Mouse Enter")}
        onCancelMouseLeave={action("Cancel Mouse Leave")}
        onCancelClick={action("Cancel Click")}
      />
    );
  });
