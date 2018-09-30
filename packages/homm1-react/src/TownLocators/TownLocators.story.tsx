import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Town } from "heroes-core";
import { TownId, TownLimit } from "heroes-homm1";

import { TownLocators } from "./TownLocators";

const towns: Town[] = [
  {
    id: TownId.Farm,
  },
  {
    id: TownId.Plains,
  },
];

storiesOf(TownLocators.name, module)
  .add("default", () => (
    <TownLocators
      towns={towns}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
    />
  ))
  .add("empty", () => (
    <TownLocators
      towns={[]}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
    />
  ));
