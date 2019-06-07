import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HotSeatGameMenu } from "./HotSeatGameMenu";

storiesOf("menu|HotSeatGameMenu", module)
  .add("default", () => (
    <HotSeatGameMenu
      onOptionClick={action("Option Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
