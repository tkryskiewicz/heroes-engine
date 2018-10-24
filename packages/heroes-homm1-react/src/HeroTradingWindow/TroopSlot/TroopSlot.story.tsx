import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { ArmySize, CreatureId } from "heroes-homm1";

import { creatureOptions } from "../../stories";
import { HeroTradingWindow } from "../HeroTradingWindow";
import { TroopSlot } from "./TroopSlot";

storiesOf(`${HeroTradingWindow.name}/${TroopSlot.name}`, module)
  .add("default", () => {
    const troop: Troop = {
      count: number("Count", 0, { range: true, min: 0, max: 9999, step: 1 }),
      creature: select("Creature", creatureOptions, CreatureId.Peasant),
    };

    return (
      <TroopSlot
        index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        troop={troop}
        onClick={action("Click")}
      />
    );
  })
  .add("empty", () => (
    <TroopSlot
      index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
      onClick={action("Click")}
    />
  ));