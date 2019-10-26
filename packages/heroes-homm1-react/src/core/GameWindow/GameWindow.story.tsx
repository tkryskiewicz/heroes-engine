import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameWindow } from "./GameWindow";

storiesOf("core|GameWindow", module)
  .add("default", () => (
    <GameWindow
      width={number("Width", 300)}
      visible={boolean("Visible", true)}
    >
      {text("Content", "Content")}
    </GameWindow>
  ));
