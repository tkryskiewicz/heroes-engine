import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { combatSide, creature } from "../../../stories";
import { CombatTroop } from "./CombatTroop";

storiesOf("combat|CombatWindow/CombatTroop", module)
  .add("default", () => {
    return (
      <CombatTroop
        side={combatSide("Side")}
        creature={creature("Creature")}
        count={number("Count", 1, { range: true, min: 1, max: 9999, step: 1 })}
        selected={boolean("Selected", false)}
      />
    );
  });
