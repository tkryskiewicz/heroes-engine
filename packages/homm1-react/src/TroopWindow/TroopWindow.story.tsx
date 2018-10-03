import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { CreatureId } from "heroes-homm1";

import { creatureOptions } from "../stories";
import { TroopWindow } from "./TroopWindow";

storiesOf(TroopWindow.name, module)
  .add("default", () => {
    const troop: Troop = {
      count: number("Count", 1, { range: true, min: 0, max: 9999, step: 1 }),
      creature: select("Creature", creatureOptions, CreatureId.Peasant),
    };

    return (
      <TroopWindow
        troop={troop}
        dismissPromptVisible={boolean("Dismiss Prompt Visible", false)}
        onDismissClick={action("Dismiss Click")}
        onCancelDismiss={action("Cancel Dismiss Click")}
        onDismiss={action("Dismiss")}
        onExitClick={action("Exit Click")}
      />
    );
  });
