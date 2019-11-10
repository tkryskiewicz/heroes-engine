import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { alignments, OpponentSetting } from "heroes-homm1";
import { alignment, gameDifficulty } from "heroes-homm1-react";

import { NewGameWindowContainer } from "./NewGameWindowContainer";

storiesOf("NewGameWindowContainer", module)
.add("default", () => (
  <NewGameWindowContainer
    data={{ alignments }}
    gameDifficulty={gameDifficulty("Game Difficulty")}
    onGameDifficultyChange={action("Game Difficulty Change")}
    opponentSettings={[OpponentSetting.Dumb, OpponentSetting.Average, OpponentSetting.None]}
    onOpponentSettingsChange={action("Opponent Settings Change")}
    playerColor={alignment("Player Color")}
    onPlayerColorChange={action("Player Color Change")}
    kingOfTheHill={boolean("King of the Hill", false)}
    onKingOfTheHillChange={action("King of the Hill Change")}
    scenarioName={text("Scenario Name", "Scenario")}
    onSelectScenarioClick={action("Select Scenario Click")}
    onOkayClick={action("Okay Click")}
    onCancelClick={action("Cancel Click")}
  />
));
