import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { initialHighScores } from "heroes-homm1";
import { gameType } from "heroes-homm1-react";

import { MainWindowContainer } from "./MainWindowContainer";

storiesOf("MainWindowContainer", module)
  .add("default", () => (
    <MainWindowContainer />
  ))
  .add("high scores", () => (
    <MainWindowContainer
      highScores={initialHighScores}
      gameType={gameType("Game Type")}
      highScoresVisible={boolean("High Scores Visible", true)}
    />
  ))
  .add("credits", () => (
    <MainWindowContainer
      creditsVisible={boolean("Credits Visible", true)}
      onOpenCreditsClick={action("Open Credits Click")}
      onCloseCreditsClick={action("Close Credits Click")}
    />
  ));
