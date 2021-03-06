import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { BaudMenu } from "./BaudMenu";

storiesOf("menu|BaudMenu", module)
  .add("default", () => (
    <BaudMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
