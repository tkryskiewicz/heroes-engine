import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { BaudMenu } from "./BaudMenu";

storiesOf(BaudMenu.name, module)
  .add("default", () => (
    <BaudMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
