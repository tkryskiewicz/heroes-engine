import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import Readme = require("./README.md");

import { MainMenu } from "./MainMenu";

storiesOf("menu|MainMenu", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <MainMenu
      onNewGameClick={action("New Game Click")}
      onLoadGameClick={action("Load Game Click")}
      onViewHighScoresClick={action("View High Scores Click")}
      onViewCreditsClick={action("View Credits Click")}
      onQuitClick={action("Quit Click")}
    />
  ));
