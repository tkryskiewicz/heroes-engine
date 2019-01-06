import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Alignment, GameDifficulty, OpponentSetting, ScenarioDifficulty, ScenarioSize } from "heroes-homm1";

import Readme = require("./README.md");

import { alignmentOptions, gameDifficultyOptions, scenarioDifficultyOptions, scenarioSizeOptions } from "../stories";
import { StandardGameScenarioInfoWindow } from "./StandardGameScenarioInfoWindow";

storiesOf("StandardGameScenarioInfoWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <StandardGameScenarioInfoWindow
      visible={boolean("Visible", true)}
      scenarioName={text("Scenario Name", "Scenario")}
      gameDifficulty={select("Game Difficulty", gameDifficultyOptions, GameDifficulty.Easy)}
      opponentSettings={[OpponentSetting.Average, OpponentSetting.Dumb, OpponentSetting.Genius]}
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      kingOfTheHill={boolean("King of the Hill", false)}
      scenarioSize={select("Scenario Size", scenarioSizeOptions, ScenarioSize.Small)}
      scenarioDifficulty={select("Scenario Difficulty", scenarioDifficultyOptions, ScenarioDifficulty.Easy)}
      scenarioDescription={text("Scenario Description", "Description")}
      onOkayClick={action("Okay Click")}
    />
  ));
