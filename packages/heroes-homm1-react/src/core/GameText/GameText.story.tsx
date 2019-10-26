import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameText, GameTextProps } from "./GameText";

const sizeOptions: GameTextProps["size"][] = [
  "large",
  "normal",
  "small",
  "tiny",
];

storiesOf("core|GameText", module)
  .add("default", () => (
    <GameText size={select("Size", sizeOptions, "large")}>
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
