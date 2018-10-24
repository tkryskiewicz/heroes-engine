import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownId, TownLimit } from "heroes-homm1";

import { TownLocators, TownLocatorsProps } from "./TownLocators";

const towns: TownLocatorsProps["towns"] = [
  {
    id: TownId.Farm,
    isCastleBuilt: false,
  },
  {
    id: TownId.Plains,
    isCastleBuilt: true,
  },
];

storiesOf(TownLocators.name, module)
  .add("default", () => (
    <TownLocators
      towns={towns}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
      onSelectedLocatorClick={action("Selected Locator Click")}
    />
  ))
  .add("empty", () => (
    <TownLocators
      towns={[]}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
      onSelectedLocatorClick={action("Selected Locator Click")}
    />
  ));