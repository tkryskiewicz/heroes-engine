import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TownLimit } from "heroes-homm1";

import { town } from "../stories";
import { TownLocator } from "./TownLocator";

storiesOf("TownLocator", module)
  .add("default", () => (
    <TownLocator
      index={number("Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      town={town("Town")}
      isCastleBuilt={boolean("Is Castle Built", false)}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
