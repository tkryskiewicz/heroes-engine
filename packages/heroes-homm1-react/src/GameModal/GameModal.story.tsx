import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText } from "../GameText";
import { GameModal } from "./GameModal";

storiesOf(GameModal.name, module)
  .add("default", () => (
    <GameModal size={number("Size", 1, { range: true, min: 0, max: 5, step: 1 })}>
      <GameText size="large">
        {text("Text", "TEXT")}
      </GameText>
    </GameModal>
  ));
