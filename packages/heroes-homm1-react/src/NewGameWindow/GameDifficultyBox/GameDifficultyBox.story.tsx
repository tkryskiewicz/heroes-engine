import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { gameDifficulty } from "../../stories";
import { GameDifficultyBox } from "./GameDifficultyBox";

storiesOf("NewGameWindow/GameDifficultyBox", module)
  .add("default", () => (
    <GameDifficultyBox
      value={gameDifficulty("Difficulty")}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
