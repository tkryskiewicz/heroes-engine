import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

import Readme = require("./README.md");

import { PuzzleWindow } from "./PuzzleWindow";

storiesOf("PuzzleWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <PuzzleWindow
      discoveredPieces={number("Discovered Pieces", 0, { range: true, min: 0, max: PuzzlePieceCount, step: 1 })}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
