import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Locator } from "./Locator";

storiesOf("Locator", module)
  .add("default", () => (
    <Locator
      index={number("Index", 0, { range: true, min: 0, max: 7, step: 1 })}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
