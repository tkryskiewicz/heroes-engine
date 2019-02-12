import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { gameOption } from "../stories";
import { EndGamePrompt } from "./EndGamePrompt";

storiesOf("EndGamePrompt", module)
  .add("default", () => (
    <EndGamePrompt
      visible={boolean("Visible", true)}
      option={gameOption("Option")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
