import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { morale } from "../../stories";
import { MoraleDetailsPrompt } from "./MoraleDetailsPrompt";

storiesOf("prompt/MoraleDetailsPrompt", module)
  .add("default", () => (
    <MoraleDetailsPrompt
      visible={boolean("Visible", true)}
      value={morale("Value")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
