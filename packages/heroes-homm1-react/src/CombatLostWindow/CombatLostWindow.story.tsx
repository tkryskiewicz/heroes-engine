import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId } from "heroes-homm1";

import { hero } from "../stories";
import { CombatLostWindow } from "./CombatLostWindow";

storiesOf("CombatLostWindow", module)
  .add("default", () => (
    <CombatLostWindow
      hero={hero("Hero")}
      isRetreat={boolean("Is Retreat", false)}
      attackerCasualties={[{ creature: CreatureId.Peasant, count: 10 }]}
      defenderCasualties={[]}
      onOkayClick={action("Okay Click")}
    />
  ));
