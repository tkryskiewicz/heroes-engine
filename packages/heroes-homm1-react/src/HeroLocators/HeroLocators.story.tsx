import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, HeroClass, HeroId, HeroLimit, MaxMobility } from "heroes-homm1";

import { HeroLocators } from "./HeroLocators";

const heroes: Hero[] = [
  {
    alignment: Alignment.Red,
    army: [],
    artifacts: [],
    experience: 0,
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
    luck: 0,
    mobility: MaxMobility,
    morale: 0,
    skills: {},
  },
];

storiesOf(HeroLocators.name, module)
  .add("default", () => (
    <HeroLocators
      heroes={heroes}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
      onSelectedLocatorClick={action("Selected Locator Click")}
    />
  ))
  .add("empty", () => (
    <HeroLocators
      heroes={[]}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
      onSelectLocator={action("Select Locator")}
      onSelectedLocatorClick={action("Selected Locator Click")}
    />
  ));
