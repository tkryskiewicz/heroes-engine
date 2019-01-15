import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId, HeroId } from "heroes-homm1";

import { heroOptions } from "../stories";
import { CombatLostWindow } from "./CombatLostWindow";

storiesOf("CombatLostWindow", module)
  .add("default", () => (
    <CombatLostWindow
      hero={select("Hero", heroOptions, HeroId.LordKilburn)}
      isRetreat={boolean("Is Retreat", false)}
      attackerCasualties={[{ creature: CreatureId.Peasant, count: 10 }]}
      defenderCasualties={[]}
      onOkayClick={action("Okay Click")}
    />
  ));
