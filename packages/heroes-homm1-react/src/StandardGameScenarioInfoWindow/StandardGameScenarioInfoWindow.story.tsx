import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { OpponentSetting } from "heroes-homm1";

import { alignment, gameDifficulty, scenarioDifficulty, scenarioSize } from "../stories";
import { StandardGameScenarioInfoWindow } from "./StandardGameScenarioInfoWindow";

storiesOf("StandardGameScenarioInfoWindow", module)
  .add("default", () => (
    <StandardGameScenarioInfoWindow
      visible={boolean("Visible", true)}
      scenarioName={text("Scenario Name", "Scenario")}
      gameDifficulty={gameDifficulty("Game Difficulty")}
      opponentSettings={[OpponentSetting.Average, OpponentSetting.Dumb, OpponentSetting.Genius]}
      alignment={alignment("Alignment")}
      kingOfTheHill={boolean("King of the Hill", false)}
      scenarioSize={scenarioSize("Scenario Size")}
      scenarioDifficulty={scenarioDifficulty("Scenario Difficulty")}
      scenarioDescription={text("Scenario Description", "Description")}
      onOkayClick={action("Okay Click")}
    />
  ));
