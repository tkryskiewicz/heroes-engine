import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CombatSide } from "heroes-core";
import { CreatureId } from "heroes-homm1";

import { combatSideOptions, creatureOptions } from "../../stories";
import { CombatTroop } from "./CombatTroop";

storiesOf("CombatWindow/CombatTroop", module)
  .add("default", () => {
    return (
      <CombatTroop
        side={select("Side", combatSideOptions, CombatSide.Attacker)}
        creature={select("Creature", creatureOptions, CreatureId.Peasant)}
        count={number("Count", 1, { range: true, min: 1, max: 9999, step: 1 })}
        selected={boolean("Selected", false)}
      />
    );
  });
