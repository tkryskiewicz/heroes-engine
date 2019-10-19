import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { hero, heroClass, resourceAmounts } from "../stories";
import { Hero, RecruitHeroWindow } from "./RecruitHeroWindow";

const getHero = (index: number): Hero => ({
  heroClass: heroClass(`Hero ${index} / Hero Class`),
  id: hero(`Hero ${index} / Hero`),
});

storiesOf("RecruitHeroWindow", module)
  .add("default", () => (
    <RecruitHeroWindow
      visible={boolean("Visible", true)}
      heroes={[getHero(1), getHero(2)]}
      cost={resourceAmounts("Cost", { [ResourceId.Gold]: 2500 })}
      disabled={boolean("Disabled", false)}
      onHeroPortraitClick={action("Hero Portrait Click")}
      onRecruitHeroClick={action("Recruit Hero Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
