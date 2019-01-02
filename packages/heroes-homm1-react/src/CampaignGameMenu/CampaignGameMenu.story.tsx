import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CampaignGameMenu } from "./CampaignGameMenu";

storiesOf(CampaignGameMenu.name, module)
  .add("default", () => (
    <CampaignGameMenu
      onPlayClick={action("Play Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));