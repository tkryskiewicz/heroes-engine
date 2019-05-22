import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { AdventureButtonsContainer } from "./AdventureButtonsContainer";

// TODO: add stories with multiple heroes
storiesOf("AdventureButtonsContainer", module)
  .add("default", () => (
    <AdventureButtonsContainer
      heroes={[]}
      onNextHeroClick={action("Next Hero Click")}
      onKingdomOverviewClick={action("Kingdom Overview Click")}
      endTurnPromptVisible={boolean("End Turn Prompt Visible", false)}
      onEndTurnClick={action("End Turn Click")}
      onConfirmEndTurnClick={action("Confirm End Turn Click")}
      onCancelEndTurnClick={action("Cancel End Turn Click")}
      onAdventureOptionsClick={action("Adventure Options Click")}
      onGameOptionsClick={action("Game Options Click")}
    />
  ));
