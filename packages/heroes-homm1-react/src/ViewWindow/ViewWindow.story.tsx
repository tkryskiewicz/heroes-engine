import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ViewWindow, ViewWindowProps } from "./ViewWindow";

const typeOptions: { [s: string]: ViewWindowProps["type"] } = {
  Puzzle: "puzzle",
  World: "view-world",
};

storiesOf(ViewWindow.name, module)
  .add("default", () => (
    <ViewWindow
      type={select("Type", typeOptions, "view-world")}
      onExitClick={action("Exit Click")}
    >
      {text("Content", "Content")}
    </ViewWindow>
  ));
