import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { GameDifficulty, OpponentSetting } from "heroes-homm1";

import Readme = require("./README.md");

import { alignment, gameDifficultyOptions } from "../stories";
import { NewGameWindow } from "./NewGameWindow";

storiesOf("NewGameWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <NewGameWindow
      selectedGameDifficulty={select("Difficulty", gameDifficultyOptions, GameDifficulty.Easy)}
      onGameDifficultyChange={action("Game Difficulty Change")}
      opponentSettings={[OpponentSetting.Dumb, OpponentSetting.Average, OpponentSetting.None]}
      onOpponentSettingsChange={action("Opponent Settings Change")}
      selectedAlignment={alignment("Alignment")}
      onAlignmentChange={action("Alignment Change")}
      kingOfTheHill={boolean("King of the Hill", false)}
      onKingOfTheHillChange={action("King of the Hill Change")}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
