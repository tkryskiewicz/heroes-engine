import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText } from "../../core";
import { GameModal } from "./GameModal";

storiesOf("base/GameModal", module)
  .add("default", () => (
    <GameModal
      visible={boolean("Visible", true)}
      size={number("Size", 1, { range: true, min: 0, max: 5, step: 1 })}
      actions={text("Actions", "Actions")}
    >
      <GameText size="large">
        {text("Text", "TEXT")}
      </GameText>
    </GameModal>
  ));
