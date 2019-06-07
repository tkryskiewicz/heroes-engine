import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText, GameTextProps } from "./GameText";

const sizeOptions: Array<GameTextProps["size"]> = [
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
  ));
