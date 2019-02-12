import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ExperienceDetailsPrompt } from "./ExperienceDetailsPrompt";

storiesOf("prompt/ExperienceDetailsPrompt", module)
  .add("default", () => (
    <ExperienceDetailsPrompt
      visible={boolean("Visible", true)}
      value={number("Experience", 0, { range: true, min: 0, max: 3000000000, step: 1 })}
      onConfirmClick={action("Confirm Click")}
    />
  ));
