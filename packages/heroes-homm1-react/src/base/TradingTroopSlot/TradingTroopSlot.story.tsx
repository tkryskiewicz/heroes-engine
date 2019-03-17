import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";

import { creature, troopIndex } from "../../stories";
import { TradingTroopSlot } from "./TradingTroopSlot";

storiesOf("base/TradingTroopSlot", module)
  .add("default", () => {
    const troop: Troop = {
      count: number("Count", 0, { range: true, min: 0, max: 9999, step: 1 }),
      creature: creature("Creature"),
    };

    return (
      <TradingTroopSlot
        index={troopIndex("Index")}
        troop={troop}
        selected={boolean("Selected", false)}
        onClick={action("Click")}
      />
    );
  })
  .add("empty", () => (
    <TradingTroopSlot
      index={troopIndex("Index")}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
