import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { LuckType, MoraleType } from "heroes-homm1";

import Readme = require("./README.md");

import { Placeholder } from "../Placeholder";
import { alignment, hero, heroClass } from "../stories";
import { HeroCombatOptions, HeroCombatOptionsProps } from "./HeroCombatOptions";

const renderHeroPortrait = () => <Placeholder name="Hero Portrait" />;

storiesOf("HeroCombatOptions", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const h: HeroCombatOptionsProps["hero"] = {
      alignment: alignment("Alignment"),
      heroClass: heroClass("Hero Class"),
      id: hero("Hero"),
      luck: LuckType.Good,
      morale: MoraleType.Bad,
      skills: {},
    };

    return (
      <HeroCombatOptions
        visible={boolean("Visible", true)}
        hero={h}
        renderHeroPortrait={renderHeroPortrait}
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
