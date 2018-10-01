import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CampaignMenu } from "./CampaignMenu";

storiesOf(CampaignMenu.name, module)
  .add("default", () => (
    <CampaignMenu
      onPlayClick={action("Play Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
