import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ComPortMenu } from "./ComPortMenu";

storiesOf("menu|ComPortMenu", module)
  .add("default", () => (
    <ComPortMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
