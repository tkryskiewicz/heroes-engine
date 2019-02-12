import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";

import { creature, troopIndex } from "../../stories";
import { TroopSlot } from "./TroopSlot";

storiesOf("HeroTradingWindow/TroopSlot", module)
  .add("default", () => {
    const troop: Troop = {
      count: number("Count", 0, { range: true, min: 0, max: 9999, step: 1 }),
      creature: creature("Creature"),
    };

    return (
      <TroopSlot
        index={troopIndex("Index")}
        troop={troop}
        selected={boolean("Selected", false)}
        onClick={action("Click")}
      />
    );
  })
  .add("empty", () => (
    <TroopSlot
      index={troopIndex("Index")}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
