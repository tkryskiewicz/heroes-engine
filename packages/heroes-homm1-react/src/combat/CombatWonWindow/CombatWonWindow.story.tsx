import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId } from "heroes-homm1";

import { hero } from "../../stories";
import { CombatWonWindow } from "./CombatWonWindow";

storiesOf("combat|CombatWonWindow", module)
  .add("default", () => (
    <CombatWonWindow
      hero={hero("Hero")}
      rewardedExperience={number("Rewarded Experience", 0, { range: true, min: 0, max: 9999, step: 1 })}
      attackerCasualties={[{ creature: CreatureId.Peasant, count: 10 }]}
      defenderCasualties={[]}
      onOkayClick={action("Okay Click")}
    />
  ));
