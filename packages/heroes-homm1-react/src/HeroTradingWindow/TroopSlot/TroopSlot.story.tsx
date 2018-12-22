import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { ArmySize, CreatureId } from "heroes-homm1";

import { creatureOptions } from "../../stories";
import { TroopSlot } from "./TroopSlot";

storiesOf(`HeroTradingWindow/${TroopSlot.name}`, module)
  .add("default", () => {
    const troop: Troop = {
      count: number("Count", 0, { range: true, min: 0, max: 9999, step: 1 }),
      creature: select("Creature", creatureOptions, CreatureId.Peasant),
    };

    return (
      <TroopSlot
        index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        troop={troop}
        selected={boolean("Selected", false)}
        onClick={action("Click")}
      />
    );
  })
  .add("empty", () => (
    <TroopSlot
      index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
