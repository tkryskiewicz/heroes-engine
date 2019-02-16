import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creature, town, troopIndex } from "../../stories";
import { TroopSlot } from "./TroopSlot";

storiesOf("base/TroopSlot", module)
  .add("default", () => {
    const troop = {
      count: number("Count", 1, { range: true, min: 0, max: 9999, step: 1 }),
      creature: creature("Creature"),
      town: !boolean("Neutral", false) ? town("Town") : undefined,
    };

    return (
      <TroopSlot
        index={troopIndex("Index")}
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
      index={troopIndex("Index")}
      selected={boolean("Selected", false)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
