import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroClass, HeroId, Resource } from "heroes-homm1";

import { Hero, RecruitHeroWindow } from "./RecruitHeroWindow";

const heroes: Hero[] = [
  {
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
  },
  {
    heroClass: HeroClass.Barbarian,
    id: HeroId.CragHack,
  },
];

storiesOf(RecruitHeroWindow.name, module)
  .add("default", () => (
    <RecruitHeroWindow
      heroes={heroes}
      resources={{ [Resource.Gold]: number("Gold", 0, { range: true, min: 0, max: 10000, step: 1 }) }}
      cost={{ [Resource.Gold]: number("Cost", 2500, { range: true, min: 0, max: 10000, step: 1 }) }}
      onHeroPortraitClick={action("Hero Portrait Click")}
      onRecruitHeroClick={action("Recruit Hero Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
