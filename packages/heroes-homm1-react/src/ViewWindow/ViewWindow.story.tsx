import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ViewWindow, ViewWindowProps } from "./ViewWindow";

const typeOptions: ViewWindowProps["type"][] = [
  "puzzle",
  "world",
];

storiesOf("ViewWindow", module)
  .add("default", () => (
    <ViewWindow
      visible={boolean("Visible", true)}
      type={select("Type", typeOptions, "world")}
      onExitClick={action("Exit Click")}
    >
      {text("Content", "Content")}
    </ViewWindow>
  ));
