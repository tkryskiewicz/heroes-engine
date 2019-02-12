import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { GameType, initialCampaignGameScores, initialStandardGameScores } from "heroes-homm1";

import Readme = require("./README.md");

import { gameType } from "../stories";
import { HighScoresWindow } from "./HighScoresWindow";

const scores = {
  [GameType.Campaign]: initialCampaignGameScores,
  [GameType.Standard]: initialStandardGameScores,
};

storiesOf("HighScoresWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HighScoresWindow
      scores={scores}
      gameType={gameType("Game Type")}
      onGameTypeChange={action("Game Type Change")}
      onExitClick={action("Exit Click")}
    />
  ));
