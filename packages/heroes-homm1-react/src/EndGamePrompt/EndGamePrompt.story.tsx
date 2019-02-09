import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EndGamePrompt, GameOption } from "./EndGamePrompt";

const optionOptions: { readonly [s: string]: GameOption; } = {
  "Load Game": "load-game",
  "New Game": "new-game",
  "Quit": "quit",
};

storiesOf("EndGamePrompt", module)
  .add("default", () => (
    <EndGamePrompt
      visible={boolean("Visible", true)}
      option={select("Option", optionOptions, "new-game")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
