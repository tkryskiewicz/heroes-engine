import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Readme = require("./README.md");

import { GameTypeMenu } from "./GameTypeMenu";

storiesOf("menu|GameTypeMenu", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <GameTypeMenu
      onStandardGameClick={action("Standard Game Click")}
      onCampaignGameClick={action("Campaign Game Click")}
      onMultiPlayerGameClick={action("Multi-Player Game Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
