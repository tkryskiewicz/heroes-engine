import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameInputNumber } from "./GameInputNumber";

storiesOf("base/GameInputNumber", module)
  .add("default", () => (
    <GameInputNumber
      min={number("Min", 0, { range: true, min: 0, max: 999, step: 1 })}
      max={number("Max", 999, { range: true, min: 0, max: 999, step: 1 })}
      value={number("Value", 0, { range: true, min: 0, max: 999, step: 1 })}
      disabled={boolean("Disabled", false)}
      onChange={action("Change")}
    />
  ));
