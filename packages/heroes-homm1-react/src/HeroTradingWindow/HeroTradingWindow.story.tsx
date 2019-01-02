import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Hero } from "heroes-core";
import { Alignment, CreatureId, HeroClass, HeroId } from "heroes-homm1";

import Readme = require("./README.md");

import { HeroTradingWindow } from "./HeroTradingWindow";

const hero: Hero = {
  alignment: Alignment.Red,
  army: [
    {
      count: 1,
      creature: CreatureId.Peasant,
    },
  ],
  artifacts: [],
  experience: 0,
  heroClass: HeroClass.Knight,
  id: HeroId.LordKilburn,
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

const otherHero: Hero = {
  alignment: Alignment.Red,
  army: [],
  artifacts: [],
  experience: 0,
  heroClass: HeroClass.Knight,
  id: HeroId.Antoine,
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

storiesOf("HeroTradingWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HeroTradingWindow
      visible={boolean("Visible", true)}
      hero={hero}
      otherHero={otherHero}
      onExitClick={action("Exit Click")}
    />
  ));
