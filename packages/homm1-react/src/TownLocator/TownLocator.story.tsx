import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownId, TownLimit } from "heroes-homm1";

import { townOptions } from "../stories";
import { TownLocator } from "./TownLocator";

storiesOf(TownLocator.name, module)
  .add("default", () => (
    <TownLocator
      index={0}
      town={select("Town", townOptions, TownId.Farm)}
      isCastleBuilt={boolean("Is Castle Built", false)}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <TownLocator
      index={number("Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
