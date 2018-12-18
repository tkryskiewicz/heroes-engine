import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ViewWindow, ViewWindowProps } from "./ViewWindow";

const typeOptions: { [s: string]: ViewWindowProps["type"] } = {
  Puzzle: "puzzle",
  World: "world",
};

storiesOf(ViewWindow.name, module)
  .add("default", () => (
    <ViewWindow
      type={select("Type", typeOptions, "world")}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    >
      {text("Content", "Content")}
    </ViewWindow>
  ));
