import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { GameType, initialCampaignGameScores, initialStandardGameScores } from "heroes-homm1";

import Readme = require("./README.md");

import { HighScoresWindow } from "./HighScoresWindow";

const scores = {
  [GameType.Campaign]: initialCampaignGameScores,
  [GameType.Standard]: initialStandardGameScores,
};

const gameTypeOptions = {
  Campaign: GameType.Campaign,
  Standard: GameType.Standard,
};

storiesOf(HighScoresWindow.name, module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HighScoresWindow
      scores={scores}
      gameType={select("Game Type", gameTypeOptions, GameType.Standard)}
      onGameTypeChange={action("Game Type Change")}
      onExitClick={action("Exit Click")}
    />
  ));
