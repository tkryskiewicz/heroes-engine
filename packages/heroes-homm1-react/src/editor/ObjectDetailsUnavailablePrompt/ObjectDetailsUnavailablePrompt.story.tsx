import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ObjectDetailsUnavailablePrompt } from "./ObjectDetailsUnavailablePrompt";

storiesOf("editor/ObjectDetailsUnavailablePrompt", module)
  .add("default", () => (
    <ObjectDetailsUnavailablePrompt
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
