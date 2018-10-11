import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CampaignScenarioInfoWindow } from "./CampaignScenarioInfoWindow";

storiesOf(CampaignScenarioInfoWindow.name, module)
  .add("default", () => {
    const scenario = {
      description: text("Scenario Description", "Description"),
      name: text("Scenario Name", "Name"),
      number: number("Scenario Number", 1, { range: true, min: 1, max: 10, step: 1 }),
    };

    return (
      <CampaignScenarioInfoWindow
        scenario={scenario}
        onOkayClick={action("Okay Click")}
        onRestartScenarioClick={action("Restart Scenario Click")}
      />
    );
  });
