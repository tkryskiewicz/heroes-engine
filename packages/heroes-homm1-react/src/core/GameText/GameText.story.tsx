import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { textSize } from "../../stories";
import { GameText } from "./GameText";

storiesOf("core|GameText", module)
  .add("default", () => (
    <GameText size={textSize("Size")}>
      {text("Text", "Some Text")}
    </GameText>
  ))
  .add("selection", () => (
    <GameText
      size="normal"
      selected={boolean("Selected", true)}
    >
      {text("Text", "Some Text")}
    </GameText>
  ));
