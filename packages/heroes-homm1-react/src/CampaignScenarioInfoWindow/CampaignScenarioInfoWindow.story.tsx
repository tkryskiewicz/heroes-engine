import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CampaignScenarioInfoWindow } from "./CampaignScenarioInfoWindow";

storiesOf("CampaignScenarioInfoWindow", module)
  .add("default", () => (
    <CampaignScenarioInfoWindow
      visible={boolean("Visible", true)}
      scenarioNumber={number("Scenario Number", 1, { range: true, min: 1, max: 10, step: 1 })}
      scenarioName={text("Scenario Name", "Name")}
      scenarioDescription={text("Scenario Description", "Description")}
      onOkayClick={action("Okay Click")}
      onRestartScenarioClick={action("Restart Scenario Click")}
    />
  ));
