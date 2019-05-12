import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameCheckbox } from "./GameCheckbox";

storiesOf("base/GameCheckbox", module)
  .add("default", () => (
    <GameCheckbox
      checked={boolean("Checked", false)}
      onClick={action("Click")}
    />
  ));
