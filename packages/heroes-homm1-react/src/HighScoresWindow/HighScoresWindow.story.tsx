import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameType, initialCampaignGameScores, initialStandardGameScores } from "heroes-homm1";

import { gameType } from "../stories";
import { HighScoresWindow } from "./HighScoresWindow";

const scores = {
  [GameType.Campaign]: initialCampaignGameScores,
  [GameType.Standard]: initialStandardGameScores,
};

storiesOf("HighScoresWindow", module)
  .add("default", () => (
    <HighScoresWindow
      scores={scores}
      gameType={gameType("Game Type")}
      onGameTypeClick={action("Game Type Click")}
      onExitClick={action("Exit Click")}
    />
  ));
