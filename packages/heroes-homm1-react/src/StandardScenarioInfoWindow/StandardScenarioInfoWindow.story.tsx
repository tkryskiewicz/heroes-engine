import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { OpponentSetting } from "heroes-homm1";

import { gameDifficulty, opponentSetting, playerColor, scenarioDifficulty, scenarioSize } from "../stories";
import { StandardScenarioInfoWindow } from "./StandardScenarioInfoWindow";

const getOpponentSettings = () => [
  opponentSetting("Opponent 1", OpponentSetting.Dumb),
  opponentSetting("Opponent 2", OpponentSetting.Average),
  opponentSetting("Opponent 3", OpponentSetting.Smart),
];

storiesOf("StandardScenarioInfoWindow", module)
  .add("default", () => (
    <StandardScenarioInfoWindow
      visible={boolean("Visible", true)}
      scenarioName={text("Scenario Name", "Scenario")}
      gameDifficulty={gameDifficulty("Game Difficulty")}
      opponentSettings={getOpponentSettings()}
      playerColor={playerColor("Player Color")}
      kingOfTheHill={boolean("King of the Hill", false)}
      difficultyRating={number("Difficulty Rating", 75)}
      scenarioSize={scenarioSize("Scenario Size")}
      scenarioDifficulty={scenarioDifficulty("Scenario Difficulty")}
      scenarioDescription={text("Scenario Description", "Description")}
      onOkayClick={action("Okay Click")}
    />
  ));
