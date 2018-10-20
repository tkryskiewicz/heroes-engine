import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameButton, GameButtonType } from "./GameButton";

const typeOptions: { [s: string]: GameButtonType } = {
  Exit: "exit",
};

storiesOf(GameButton.name, module)
  .add("default", () => (
    <GameButton
      type={select("Type", typeOptions, "exit")}
      disabled={boolean("Disabled", false)}
      onClick={action("Click")}
    />
  ));
