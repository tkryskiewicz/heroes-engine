import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { PlayersMenu } from "./PlayersMenu";

storiesOf("menu|PlayersMenu", module)
  .add("default", () => (
    <PlayersMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
