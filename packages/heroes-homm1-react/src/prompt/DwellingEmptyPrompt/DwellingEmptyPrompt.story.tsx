import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creature, dwellingObject } from "../../stories";
import { DwellingEmptyPrompt } from "./DwellingEmptyPrompt";

storiesOf("prompt|DwellingEmptyPrompt", module)
  .add("default", () => (
    <DwellingEmptyPrompt
      visible={boolean("Visible", true)}
      dwelling={dwellingObject("Dwelling")}
      creature={creature("Creature")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
