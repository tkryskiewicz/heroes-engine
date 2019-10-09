import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ScenarioSpecification } from "heroes-homm1";

import { scenarioDifficulty, scenarioSize } from "../../stories";
import { ScenarioSpecificationWindow } from "./ScenarioSpecificationWindow";

storiesOf("editor|ScenarioSpecificationWindow", module)
  .add("default", () => {
    const value: ScenarioSpecification = {
      description: text("Description", "Description"),
      difficulty: scenarioDifficulty("Selected Difficulty"),
      filePrefix: text("File Prefix", "Prefix"),
      name: text("Name", "Name"),
      size: scenarioSize("Selected Size"),
    };

    return (
      <ScenarioSpecificationWindow
        visible={boolean("Visible", true)}
        value={value}
        onValueChange={action("Value Change")}
        onConfirmClick={action("Confirm Click")}
        onCancelClick={action("Cancel Click")}
      />
    );
  });
