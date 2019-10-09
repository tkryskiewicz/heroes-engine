import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { alignment, combatSide, heroClass } from "../../stories";
import { CombatTent } from "./CombatTent";

storiesOf("combat|CombatTent", module)
  .add("default", () => (
    <CombatTent
      side={combatSide("Side")}
      alignment={alignment("Alignment")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
