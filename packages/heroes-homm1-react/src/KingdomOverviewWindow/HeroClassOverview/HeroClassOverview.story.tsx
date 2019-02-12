import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroLimit } from "heroes-homm1";

import { heroClass } from "../../stories";
import { HeroClassOverview } from "./HeroClassOverview";

storiesOf("KingdomOverviewWindow/HeroClassOverview", module)
  .add("default", () => (
    <HeroClassOverview
      heroClass={heroClass("Hero Class")}
      count={number("Count", 0, { range: true, min: 0, max: HeroLimit, step: 1 })}
    />
  ));
