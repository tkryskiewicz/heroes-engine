import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { DismissHeroPrompt } from "./DismissHeroPrompt";

storiesOf("DismissHeroPrompt", module)
  .add("default", () => (
    <DismissHeroPrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
