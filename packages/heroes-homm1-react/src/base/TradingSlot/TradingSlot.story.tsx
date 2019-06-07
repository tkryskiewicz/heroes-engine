import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TradingSlot } from "./TradingSlot";

storiesOf("base|TradingSlot", module)
  .add("default", () => (
    <TradingSlot
      index={number("Index", 0, { range: true, min: 0, max: 20, step: 1 })}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
