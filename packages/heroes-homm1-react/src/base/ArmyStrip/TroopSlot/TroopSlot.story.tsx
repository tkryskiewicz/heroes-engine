import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArmySize, CreatureId, TownId } from "heroes-homm1";

import { creatureOptions, townOptions } from "../../../stories";
import { TroopSlot } from "./TroopSlot";

storiesOf("base/ArmyStrip/TroopSlot", module)
  .add("default", () => {
    const troop = {
      count: number("Count", 1, { range: true, min: 0, max: 9999, step: 1 }),
      creature: select("Creature", creatureOptions, CreatureId.Peasant),
      town: !boolean("Neutral", false) ? select("Town", townOptions, TownId.Farm) : undefined,
    };

    return (
      <TroopSlot
        index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        troop={troop}
        selected={boolean("Selected", false)}
        onMouseEnter={action("Mouse Enter")}
        onMouseLeave={action("Mouse Leave")}
        onClick={action("Click")}
      />
    );
  })
  .add("empty", () => (
    <TroopSlot
      index={number("Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
      selected={boolean("Selected", false)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
