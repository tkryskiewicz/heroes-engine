import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArtifactNotTradablePrompt } from "./ArtifactNotTradablePrompt";

storiesOf("prompt|ArtifactNotTradablePrompt", module)
  .add("default", () => (
    <ArtifactNotTradablePrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
