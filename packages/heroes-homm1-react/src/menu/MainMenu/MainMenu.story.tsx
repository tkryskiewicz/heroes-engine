import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { MainMenu } from "./MainMenu";

storiesOf("menu/MainMenu", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <MainMenu
      onNewGameClick={action("New Game Click")}
      onLoadGameClick={action("Load Game Click")}
      onViewHighScoresClick={action("View High Scores Click")}
      onViewCreditsClick={action("View Credits Click")}
      onQuitClick={action("Quit Click")}
    />
  ));
