import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameDifficulty } from "heroes-homm1";

import { gameDifficultyOptions } from "../../stories";
import { NewGameWindow } from "../NewGameWindow";
import { GameDifficultyBox } from "./GameDifficultyBox";

storiesOf(`${NewGameWindow.name}/${GameDifficultyBox.name}`, module)
  .add("default", () => (
    <GameDifficultyBox
      value={select("Difficulty", gameDifficultyOptions, GameDifficulty.Easy)}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
