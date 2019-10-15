import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { AdventureButtons } from "./AdventureButtons";

storiesOf("AdventureButtons", module)
  .add("default", () => (
    <AdventureButtons
      nextHeroDisabled={boolean("Next Hero Disabled", false)}
      onNextHeroClick={action("Next Hero Click")}
      moveDisabled={boolean("Move Disabled", false)}
      onMoveClick={action("Move Click")}
      onKingdomOverviewClick={action("Kingdom Overview Click")}
      onEndTurnClick={action("End Turn Click")}
      onAdventureOptionsClick={action("Adventure Options Click")}
      onGameOptionsClick={action("Game Options Click")}
    />
  ));
