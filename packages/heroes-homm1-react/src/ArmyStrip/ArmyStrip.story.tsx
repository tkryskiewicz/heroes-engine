import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Army } from "heroes-core";
import { ArmySize, CreatureId } from "heroes-homm1";

import { ArmyStrip } from "./ArmyStrip";

storiesOf(ArmyStrip.name, module)
  .add("default", () => {
    const army: Army = [
      {
        count: 1,
        creature: CreatureId.Peasant,
      },
    ];

    return (
      <ArmyStrip
        army={army}
        selectedTroopIndex={number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        onSelectTroop={action("Select Troop")}
        onSelectedTroopClick={action("Selected Troop Click")}
        onSwapTroops={action("Swap Troops")}
      />
    );
  })
  .add("empty", () => (
    <ArmyStrip
      army={[]}
      selectedTroopIndex={number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
      onSelectTroop={action("Select Troop")}
      onSelectedTroopClick={action("Selected Troop Click")}
      onSwapTroops={action("Swap Troops")}
    />
  ));
