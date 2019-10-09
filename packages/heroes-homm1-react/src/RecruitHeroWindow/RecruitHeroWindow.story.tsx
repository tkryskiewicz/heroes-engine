import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { HeroClass, HeroId, ResourceId } from "heroes-homm1";

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

storiesOf("RecruitHeroWindow", module)
  .add("default", () => (
    <RecruitHeroWindow
      heroes={heroes}
      resources={{ [ResourceId.Gold]: number("Gold", 0, { range: true, min: 0, max: 10000, step: 1 }) }}
      cost={{ [ResourceId.Gold]: number("Cost", 2500, { range: true, min: 0, max: 10000, step: 1 }) }}
      visible={boolean("Visible", true)}
      onHeroPortraitClick={action("Hero Portrait Click")}
      onRecruitHeroClick={action("Recruit Hero Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
