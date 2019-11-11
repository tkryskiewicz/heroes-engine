import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { combatSide, heroClass, playerColor } from "../../stories";
import { CombatTent } from "./CombatTent";

storiesOf("combat|CombatTent", module)
  .add("default", () => (
    <CombatTent
      side={combatSide("Side")}
      playerColor={playerColor("Player Color")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
