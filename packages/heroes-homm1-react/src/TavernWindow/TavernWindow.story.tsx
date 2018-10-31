import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TavernWindow } from "./TavernWindow";

storiesOf(TavernWindow.name, module)
  .add("default", () => (
    <TavernWindow
      onOkayClick={action("Okay Click")}
    />
  ));
