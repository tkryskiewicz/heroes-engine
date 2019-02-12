import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroClass } from "heroes-homm1";

import { hero, heroClassOptions } from "../../stories";
import { RecruitHero } from "./RecruitHero";

storiesOf("RecruitHeroWindow/RecruitHero", module)
  .add("default", () => (
    <RecruitHero
      heroId={hero("Hero")}
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      onPortraitClick={action("Portrait Click")}
      onRecruitClick={action("Recruit Click")}
    />
  ));
