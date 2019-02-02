import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { creatureById, CreatureId } from "heroes-homm1";

import { creatureOptions } from "../stories";
import { TroopWindow } from "./TroopWindow";

const troopBase: Troop = {
  count: 1,
  creature: CreatureId.Peasant,
};

storiesOf("TroopWindow", module)
  .add("default", () => {
    const troop: Troop = {
      ...troopBase,
      count: number("Count", 1, { range: true, min: 0, max: 9999, step: 1 }, "troop"),
      creature: select("Creature", creatureOptions, CreatureId.Peasant, "troop"),
    };

    return (
      <TroopWindow
        troop={troop}
        creature={creatureById[troop.creature]}
        visible={boolean("Visible", true)}
        onExitClick={action("Exit Click")}
      />
    );
  })
  .add("dismissal", () => (
    <TroopWindow
      troop={troopBase}
      creature={creatureById[troopBase.creature]}
      dismissible={boolean("Dismissible", true)}
      visible={true}
      dismissPromptVisible={boolean("Dismiss Prompt Visible", false)}
      onDismissClick={action("Dismiss Click")}
      onCancelDismissClick={action("Cancel Dismiss Click")}
      onConfirmDismissClick={action("Confirm Dismiss Click")}
    />
  ));
