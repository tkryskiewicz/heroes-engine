import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { combatSide, creature } from "../../stories";
import { CombatTroop } from "./CombatTroop";

storiesOf("CombatWindow/CombatTroop", module)
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
