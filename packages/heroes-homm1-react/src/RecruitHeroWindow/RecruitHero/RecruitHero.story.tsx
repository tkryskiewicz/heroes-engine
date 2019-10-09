import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { hero, heroClass } from "../../stories";
import { RecruitHero } from "./RecruitHero";

storiesOf("RecruitHeroWindow/RecruitHero", module)
  .add("default", () => (
    <RecruitHero
      heroId={hero("Hero")}
      heroClass={heroClass("Hero Class")}
      onPortraitClick={action("Portrait Click")}
      onRecruitClick={action("Recruit Click")}
    />
  ));
