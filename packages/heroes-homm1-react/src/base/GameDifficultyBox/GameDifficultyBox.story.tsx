import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { gameDifficulty } from "../../stories";
import { GameDifficultyBox } from "./GameDifficultyBox";

storiesOf("base|GameDifficultyBox", module)
  .add("default", () => (
    <GameDifficultyBox
      value={gameDifficulty("Value")}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
