import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameType, initialCampaignGameScores, initialStandardGameScores } from "heroes-homm1";

import Readme = require("./README.md");

import { gameType } from "../stories";
import { HighScoresWindow } from "./HighScoresWindow";

const scores = {
  [GameType.Campaign]: initialCampaignGameScores,
  [GameType.Standard]: initialStandardGameScores,
};

storiesOf("HighScoresWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <HighScoresWindow
      scores={scores}
      gameType={gameType("Game Type")}
      onGameTypeChange={action("Game Type Change")}
      onExitClick={action("Exit Click")}
    />
  ));
