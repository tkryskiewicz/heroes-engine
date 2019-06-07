import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId } from "heroes-homm1";

import { creature } from "../../stories";
import { ArmyDetails } from "./ArmyDetails";

storiesOf("editor|ArmyDetails", module)
  .add("default", () => {
    const armySize = number("Army Size", 1, { range: true, min: 0, max: 10, step: 1 });

    const value = [...new Array(armySize).keys()]
      .map(() => ({ count: 0, creature: CreatureId.Peasant }));

    return (
      <ArmyDetails
        creatures={Object.values(CreatureId)}
        value={value}
        onValueChange={action("Value Change")}
      />
    );
  })
  .add("troop", () => {
    const value = [...new Array(1).keys()]
      .map(() => ({
        count: number("Troop Count", 0, { range: true, min: 0, max: 999, step: 1 }),
        creature: creature("Troop Creature"),
      }));

    return (
      <ArmyDetails
        creatures={Object.values(CreatureId)}
        value={value}
        onValueChange={action("Value Change")}
      />
    );
  });
