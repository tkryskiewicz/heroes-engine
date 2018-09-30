import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

import { PuzzleWindow } from "./PuzzleWindow";

storiesOf(PuzzleWindow.name, module)
  .add("default", () => (
    <PuzzleWindow
      discoveredPieces={number("Discovered Pieces", 0, { range: true, min: 0, max: PuzzlePieceCount, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ));
