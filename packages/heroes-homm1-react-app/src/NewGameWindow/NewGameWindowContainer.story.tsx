import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { OpponentSetting, playerColors } from "heroes-homm1";
import { gameDifficulty, playerColor } from "heroes-homm1-react";

import { NewGameWindowContainer } from "./NewGameWindowContainer";

storiesOf("NewGameWindowContainer", module)
.add("default", () => (
  <NewGameWindowContainer
    data={{ playerColors }}
    gameDifficulty={gameDifficulty("Game Difficulty")}
    onGameDifficultyChange={action("Game Difficulty Change")}
    opponentSettings={[OpponentSetting.Dumb, OpponentSetting.Average, OpponentSetting.None]}
    onOpponentSettingsChange={action("Opponent Settings Change")}
    playerColor={playerColor("Player Color")}
    onPlayerColorChange={action("Player Color Change")}
    kingOfTheHill={boolean("King of the Hill", false)}
    onKingOfTheHillChange={action("King of the Hill Change")}
    scenarioName={text("Scenario Name", "Scenario")}
    onSelectScenarioClick={action("Select Scenario Click")}
    onOkayClick={action("Okay Click")}
    onCancelClick={action("Cancel Click")}
  />
));
