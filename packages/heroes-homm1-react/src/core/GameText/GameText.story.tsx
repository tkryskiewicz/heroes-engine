import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText, GameTextProps } from "./GameText";

const sizeOptions: { [s: string]: GameTextProps["size"] } = {
  Large: "large",
  Normal: "normal",
  Small: "small",
};

storiesOf(`core/${GameText.name}`, module)
  .add("default", () => (
    <GameText size={select("Size", sizeOptions, "large")}>
      {text("Text", "Some Text")}
    </GameText>
  ));
