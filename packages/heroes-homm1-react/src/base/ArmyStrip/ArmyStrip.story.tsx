import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Army } from "heroes-core";
import { CreatureId } from "heroes-homm1";

import { troopIndex } from "../../stories";
import { ArmyStrip } from "./ArmyStrip";

storiesOf("base|ArmyStrip", module)
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
        selectedTroopIndex={troopIndex("Selected Troop Index")}
        onTroopMouseEnter={action("Troop Mouse Enter")}
        onTroopMouseLeave={action("Troop Mouse Leave")}
        onTroopClick={action("Troop Click")}
      />
    );
  })
  .add("empty", () => (
    <ArmyStrip
      army={[]}
      selectedTroopIndex={troopIndex("Selected Troop Index")}
      onTroopMouseEnter={action("Troop Mouse Enter")}
      onTroopMouseLeave={action("Troop Mouse Leave")}
      onTroopClick={action("Troop Click")}
    />
  ));
