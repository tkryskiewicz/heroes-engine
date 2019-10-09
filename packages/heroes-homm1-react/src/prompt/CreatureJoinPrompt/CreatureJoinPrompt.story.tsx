import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { creature, dwellingObject } from "../../stories";
import { CreatureJoinPrompt } from "./CreatureJoinPrompt";

storiesOf("prompt|CreatureJoinPrompt", module)
  .add("default", () => (
    <CreatureJoinPrompt
      visible={boolean("Visible", true)}
      creature={creature("Creature")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ))
  .add("with dwelling", () => (
    <CreatureJoinPrompt
      visible={true}
      dwelling={dwellingObject("Dwelling")}
      creature={creature("Creature")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
