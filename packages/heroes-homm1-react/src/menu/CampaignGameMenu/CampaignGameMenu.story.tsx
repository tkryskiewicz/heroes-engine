import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CampaignGameMenu } from "./CampaignGameMenu";

storiesOf("menu|CampaignGameMenu", module)
  .add("default", () => (
    <CampaignGameMenu
      onPlayClick={action("Play Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
