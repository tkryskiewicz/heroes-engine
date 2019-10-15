import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameTypeMenu } from "./GameTypeMenu";

storiesOf("menu|GameTypeMenu", module)
  .add("default", () => (
    <GameTypeMenu
      onStandardGameClick={action("Standard Game Click")}
      onCampaignGameClick={action("Campaign Game Click")}
      onMultiPlayerGameClick={action("Multi-Player Game Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
