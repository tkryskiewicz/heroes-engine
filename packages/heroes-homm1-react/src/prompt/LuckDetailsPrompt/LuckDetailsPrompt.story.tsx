import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { luckType } from "../../stories";
import { LuckDetailsPrompt } from "./LuckDetailsPrompt";

storiesOf("prompt/LuckDetailsPrompt", module)
  .add("default", () => (
    <LuckDetailsPrompt
      visible={boolean("Visible", true)}
      type={luckType("Type")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
