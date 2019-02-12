import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, combatSide, heroClass } from "../../stories";
import { Tent } from "./Tent";

storiesOf("CombatWindow/Tent", module)
  .add("default", () => (
    <Tent
      side={combatSide("Side")}
      alignment={alignment("Alignment")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
