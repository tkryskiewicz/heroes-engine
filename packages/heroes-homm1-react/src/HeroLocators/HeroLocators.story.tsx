import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Hero } from "heroes-core";
import { HeroClass, HeroId, HeroLimit, MaxMobility } from "heroes-homm1";

import { HeroLocators } from "./HeroLocators";

const heroes: Hero[] = [
  {
    army: [],
    artifacts: [],
    dataId: "hero",
    experience: 0,
    heroClass: HeroClass.Knight,
    heroId: HeroId.LordKilburn,
    id: "id",
    luck: 0,
    mobility: MaxMobility,
    morale: 0,
    skills: {},
  },
];

storiesOf("HeroLocators", module)
  .add("default", () => (
    <HeroLocators
      heroes={heroes}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
      onLocatorClick={action("Locator Click")}
    />
  ))
  .add("empty", () => (
    <HeroLocators
      heroes={[]}
      selectedIndex={number("Selected Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
      onLocatorClick={action("Locator Click")}
    />
  ));
