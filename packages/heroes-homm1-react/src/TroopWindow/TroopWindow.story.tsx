import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { creatureById, CreatureId } from "heroes-homm1";

import { creature, troopIndex } from "../stories";
import { TroopWindow } from "./TroopWindow";

const troopBase: Troop = {
  count: 1,
  creature: CreatureId.Peasant,
};

storiesOf("TroopWindow", module)
  .add("default", () => (
    <TroopWindow
      index={troopIndex("Index")}
      creature={creatureById[creature("Creature")]}
      count={number("Count", 1, { range: true, min: 0, max: 9999, step: 1 })}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("dismissal", () => (
    <TroopWindow
      index={troopIndex("Index")}
      creature={creatureById[troopBase.creature]}
      count={troopBase.count}
      dismissible={boolean("Dismissible", true)}
      visible={true}
      dismissPromptVisible={boolean("Dismiss Prompt Visible", false)}
      onDismissClick={action("Dismiss Click")}
      onCancelDismissClick={action("Cancel Dismiss Click")}
      onConfirmDismissClick={action("Confirm Dismiss Click")}
    />
  ));
