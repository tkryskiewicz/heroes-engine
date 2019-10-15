import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CampaignMenu } from "./CampaignMenu";

storiesOf("menu|CampaignMenu", module)
  .add("default", () => (
    <CampaignMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
