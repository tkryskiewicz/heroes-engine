import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CombatSide } from "heroes-core";

import { alignment, combatSideOptions, heroClass } from "../../stories";
import { Tent } from "./Tent";

storiesOf("CombatWindow/Tent", module)
  .add("default", () => (
    <Tent
      side={select("Side", combatSideOptions, CombatSide.Attacker)}
      alignment={alignment("Alignment")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
