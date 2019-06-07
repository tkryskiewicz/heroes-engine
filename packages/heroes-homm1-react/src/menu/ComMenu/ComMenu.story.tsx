import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ComMenu } from "./ComMenu";

storiesOf("menu|ComMenu", module)
  .add("default", () => (
    <ComMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
