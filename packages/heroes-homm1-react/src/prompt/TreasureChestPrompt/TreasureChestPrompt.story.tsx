import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Resource } from "heroes-homm1";

import { TreasureChestPrompt } from "./TreasureChestPrompt";

storiesOf("prompt/TreasureChestPrompt", module)
  .add("default", () => (
    <TreasureChestPrompt
      visible={boolean("Visible", true)}
      resources={{ [Resource.Gold]: 1000 }}
      experience={500}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
