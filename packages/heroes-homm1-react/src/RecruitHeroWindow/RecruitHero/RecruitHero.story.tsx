import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroClass, HeroId } from "heroes-homm1";

import { heroClassOptions, heroOptions } from "../../stories";
import { RecruitHero } from "./RecruitHero";

storiesOf(`RecruitHeroWindow/${RecruitHero.name}`, module)
  .add("default", () => (
    <RecruitHero
      heroId={select("Hero", heroOptions, HeroId.LordKilburn)}
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      onPortraitClick={action("Portrait Click")}
      onRecruitClick={action("Recruit Click")}
    />
  ));
