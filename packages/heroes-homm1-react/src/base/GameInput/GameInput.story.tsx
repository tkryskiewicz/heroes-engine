import { action } from "@storybook/addon-actions";
import { number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameInput, GameInputProps } from "./GameInput";

const sizeOptions: GameInputProps["size"][] = [
  "large",
  "small",
];

storiesOf("base|GameInput", module)
  .add("default", () => (
    <GameInput
      size={select("Size", sizeOptions, "large")}
      maxLength={number("Max Length", 100, { range: true, min: 0, max: 100, step: 1 })}
      value={text("Value", "Value")}
      onChange={action("Change")}
    />
  ));
