import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText } from "../../core";
import { GameModal, GameModalProps } from "./GameModal";

const typeOptions: GameModalProps["type"][] = [
  "cancel",
  "okay",
  "okayCancel",
  "yesNo",
];

storiesOf("base|GameModal", module)
  .add("default", () => (
    <GameModal
      visible={boolean("Visible", true)}
      type={select("Type", typeOptions, "yesNo")}
      size={number("Size", 1, { range: true, min: 0, max: 5, step: 1 })}
      confirmDisabled={boolean("Confirm Disabled", false)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    >
      <GameText size="large">
        {text("Text", "TEXT")}
      </GameText>
    </GameModal>
  ));
