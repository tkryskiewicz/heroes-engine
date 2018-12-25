import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HotSeatMenu } from "./HotSeatMenu";

storiesOf(HotSeatMenu.name, module)
  .add("default", () => (
    <HotSeatMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
