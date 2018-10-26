import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameButton, GameButtonType } from "./GameButton";

const typeOptions: { [s: string]: GameButtonType } = {
  No: "no",
  Yes: "yes",
};

storiesOf(GameButton.name, module)
  .add("default", () => (
    <GameButton
      group={select("Group", { System: "system" }, "system")}
      type={select("Type", typeOptions, "yes")}
      disabled={boolean("Disabled", false)}
      onClick={action("Click")}
    />
  ));
