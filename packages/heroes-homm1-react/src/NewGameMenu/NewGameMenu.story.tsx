import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { NewGameMenu } from "./NewGameMenu";

storiesOf(NewGameMenu.name, module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <NewGameMenu
      onStandardGameClick={action("Standard Game Click")}
      onCampaignGameClick={action("Campaign Game Click")}
      onMultiPlayerGameClick={action("Multi-Player Game Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
