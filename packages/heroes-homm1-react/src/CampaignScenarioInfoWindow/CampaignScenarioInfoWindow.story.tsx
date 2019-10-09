import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "./CampaignScenarioInfoWindow";

storiesOf("CampaignScenarioInfoWindow", module)
  .add("default", () => {
    const scenario: CampaignScenarioInfoWindowProps["scenario"] = {
      description: text("Scenario Description", "Description"),
      name: text("Scenario Name", "Name"),
      scenarioNumber: number("Scenario Number", 1, { range: true, min: 1, max: 10, step: 1 }),
    };

    return (
      <CampaignScenarioInfoWindow
        visible={boolean("Visible", true)}
        scenario={scenario}
        onOkayClick={action("Okay Click")}
        onRestartScenarioClick={action("Restart Scenario Click")}
      />
    );
  });
