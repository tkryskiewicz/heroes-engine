import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { initialHighScores } from "heroes-homm1";

import { gameType } from "../stories";
import { HighScoresWindow } from "./HighScoresWindow";

storiesOf("HighScoresWindow", module)
  .add("default", () => (
    <HighScoresWindow
      visible={boolean("Visible", true)}
      scores={initialHighScores}
      gameType={gameType("Game Type")}
      onGameTypeClick={action("Game Type Click")}
      onExitClick={action("Exit Click")}
    />
  ));
