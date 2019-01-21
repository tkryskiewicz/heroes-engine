import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId, HeroId } from "heroes-homm1";

import { heroOptions } from "../stories";
import { CombatWonWindow } from "./CombatWonWindow";

storiesOf("CombatWonWindow", module)
  .add("default", () => (
    <CombatWonWindow
      hero={select("Hero", heroOptions, HeroId.LordKilburn)}
      rewardedExperience={number("Rewarded Experience", 0, { range: true, min: 0, max: 9999, step: 1 })}
      attackerCasualties={[{ creature: CreatureId.Peasant, count: 10 }]}
      defenderCasualties={[]}
      onOkayClick={action("Okay Click")}
    />
  ));
