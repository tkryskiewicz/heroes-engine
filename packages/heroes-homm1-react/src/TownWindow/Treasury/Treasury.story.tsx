import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownWindow } from "../TownWindow";
import { Treasury } from "./Treasury";

storiesOf(`${TownWindow.name}/${Treasury.name}`, module)
  .add("default", () => (
    <Treasury
      resources={{}}
      onExitClick={action("Exit Click")}
    />
  ));
